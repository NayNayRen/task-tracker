<template>
  <div v-for="task in tasks" :key="task.id">
    <!-- second step in getting data from a level up -->
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
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
  // emits the events up one level to App.vue
  emits: ["delete-task", "toggle-reminder"],
};
</script>
<!-- v-for is a for loop directive to make a list from the tasks array -->
<!-- coded opposite a php foreach, here singular comes first -->
<!-- if a warning for the v-for saying a unique id is needed, v-bind the id as the key(:key="task.id") -->
<!-- i got no warning but added it anyway -->
<!-- add the new Task component to the v-for div -->
<!-- v-bind the task prop from Task.vue to the task from the v-for -->

<!-- ADD EMIT EVENT step 2, step 3 in App.vue -->
<!-- add the @delete-task event to the Task component -->
<!-- @delete-task value is the $emit('delete-task', task.id) set in the @click event in Task.vue -->
<!-- create an emits object with an array, add delete-task to the array -->

<!-- TOGGLE REMINDER step 2 -->
<!-- add the @toggle-reminder event to the Task component -->
<!-- @toggle-reminder value is the $emit('toggle-reminder', task.id) set in the @dblClick event in Task.vue -->
<!-- add toggle-reminder to the emits object array -->
