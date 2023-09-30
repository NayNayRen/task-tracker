<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <!-- tasks prop from Tasks.vue bound to tasks array -->
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },

  data() {
    return {
      tasks: [],
    };
  },
  // created will run when the page loads
  // this.tasks hooks into task array above, a lifecycle for page load
  // usually reserved for api and http requests
  async created() {
    this.tasks = await this.fetchTasks();
  },

  methods: {
    async addTask(task) {
      const response = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      // spread across current tasks, and add the new one onto it
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      // confirm is an alert box in Vue.js
      if (confirm("Are you sure?")) {
        const response = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        response.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting your task.");
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const response = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await response.json();
      // reset and return the array of updated tasks
      // for each task, if task.id is equal to(===) the id passed then(?) spread acrossed the array(...) and change the reminder(:) to the opposite(!task.reminder) of the current reminder, else(:) dont change it
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    // gets all tasks
    async fetchTasks() {
      const response = await fetch("api/tasks");
      const data = await response.json();
      return data;
    },
    // gets single task
    async fetchTask(id) {
      const response = await fetch(`api/tasks/${id}`);
      const data = await response.json();
      return data;
    },
  },
};
</script>
