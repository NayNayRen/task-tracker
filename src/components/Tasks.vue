<template>
  <div :key="task.id" v-for="task in tasks">
    <Task :task="task" />
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
};
</script>
<!-- v-for is a for loop directive to make a list from the tasks array -->
<!-- coded opposite a php foreach, here singular comes first -->
<!-- if a warning for the v-for saying a unique id is needed, v-bind the id as the key(:key="task.id") -->
<!-- i got no warning but added it anyway -->
<!-- add the new Task component to the v-for div -->
<!-- v-bind the task prop from Task.vue to the task from the v-for -->
