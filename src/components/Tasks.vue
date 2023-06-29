<template>
  <div :key="task.id" v-for="task in tasks">
    <!-- second step in getting data from a level up -->
    <Task @delete-task="$emit('delete-task', task.id)" :task="task" />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  // name used to import into App.vue
  name: "Tasks",
  // props value is set in App.vue and added to the Tasks component
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  // if you get emits events listeners warning in console, emits object needs to be registered with the same name as above $emit()
  emits: ["delete-task"],
};
</script>
<!-- v-for is a for loop directive to make a list from the tasks array -->
<!-- coded opposite a php foreach, here singular comes first -->
<!-- if a warning for the v-for saying a unique id is needed, v-bind the id as the key(:key="task.id") -->
<!-- i got no warning but added it anyway -->
<!-- add the new Task component to the v-for div -->
<!-- v-bind the task prop from Task.vue to the task from the v-for -->

<!-- ADDED EMIT EVENT step 2, step 3 in App.vue -->
<!-- add the @delete-task event to Task component -->
<!-- @delete-task is the same name set in this.$emit() in Task.vue -->
<!-- $emit() is used to catch this.$emit() from Task.vue -->
<!-- pass $emit() the same delete-task name, and the task.id to be used as the id in Task.vue  -->
<!-- you could add a methods object under components object and do the same as in Task.vue -->
<!-- this way is less code -->
