<template>
  <div class="container">
    <!-- title prop from Header.vue -->
    <Header title="Task Tracker" />
    <!-- tasks prop from Tasks.vue bound to tasks array -->
    <!-- last step in getting data from a level up -->
    <Tasks @delete-task="deleteTask" :tasks="tasks" />
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
      // this.tasks filters each task
      // where task.id is not equal to id being passed, give all data back BUT that one
      // confirm is an alert box in Vue.js
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
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
<!-- ADDED EMIT EVENT step 3, step 1 is in Task.vue -->
<!-- add the @delete-task event to Tasks component -->
<!-- the value of @delete-task is the same as the name used in $emit() in Task.vue -->
<!-- if you get an emits events listeners warning in console, register emits object in Tasks.vue with the event being emitted(delete-task) -->
<!-- add the methods object, and define the deleteTask() function -->
<!-- don't push directly onto the array, filter and make a new one -->

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
