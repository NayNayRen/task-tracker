<template>
  <div class="container">
    <!-- title prop from Header.vue -->
    <Header
      @toggle-add-task="toggleAddTask()"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <!-- tasks prop from Tasks.vue bound to tasks array -->
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  methods: {
    toggleAddTask() {
      // on button click do the opposite of current state
      // if show then hide, if hide then show
      this.showAddTask = !this.showAddTask;
    },
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
    toggleReminder(id) {
      // reset and return the array of updated tasks
      // for each task, if task.id is equal to(===) the id passed then(?) spread acrossed the array(...) and change the reminder(:) to the opposite(!task.reminder) of the current reminder, else(:) dont change it
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
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
  // data function that returns an object, default serttings for page load
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  // created will run when the page loads
  // this.tasks hooks into task array above, a lifecycle for page load
  // usually reserved for api and http requests
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
<!-- ADD EMIT EVENT step 3, step 1 is in Task.vue -->
<!-- add @delete-task event with value deleteTask to Tasks component -->
<!-- create the methods object, define and add the deleteTask() function to it -->
<!-- pass the id as a parameter -->
<!-- this keyword is for the fa icon being clicked -->
<!-- don't push directly onto the array, filter and make a new one -->
<!-- filter is a high order array for item removal -->
<!-- where task.id does not equal the id being passed, remove that task -->

<!-- TOGGLE REMINDER step 3 -->
<!-- we are toggling to change true to false or false to true -->
<!-- add @toggle-reminder event with value toggleReminder to Tasks component -->
<!-- define and add the toggleReminder() function to the methods object -->
<!-- pass the id as a parameter -->
<!-- this keyword is for the task being clicked -->
<!-- use map to check each task for the reminder class -->
<!-- the conditional goes as such
if the task.id is equal(===) to the id being passed, then(?) return array of objects,
spread(...) across each task, change the reminder to(reminder:) whatever the opposite(!task.reminder) of the current task reminder, else(:) return the initial task
-->

<!-- Multiple ways to add styles, a global style sheet, in-file style list below, or scoped for a specific component -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.btn {
  background-color: #000;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 15px;
  margin: 5px;
  padding: 10px 20px;
  text-decoration: none;
}

.btn:active {
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}

.btn:focus {
  outline: none;
}

.btn-block {
  display: block;
  width: 100%;
}

.container {
  border-radius: 5px;
  border: 1px solid #000;
  margin: 30px auto;
  max-width: 500px;
  min-height: 300px;
  overflow: auto;
  padding: 30px;
}
</style>
