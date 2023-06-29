<template>
  <div class="container">
    <!-- title prop from Header.vue -->
    <Header title="Task Tracker" />
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

export default {
  name: "App",
  components: {
    Header,
    Tasks,
  },
  methods: {
    deleteTask(id) {
      // console.log(id);
      // confirm is an alert box in Vue.js
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      // console.log(id);
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
  // data function that returns an object
  data() {
    return {
      tasks: [],
    };
  },
  // created will run when the page loads
  // usually reserved for api and http requests
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctor Appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at school",
        day: "July 10th 12:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Get groceries",
        day: "Sunday at 11am",
        reminder: false,
      },
    ];
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
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
