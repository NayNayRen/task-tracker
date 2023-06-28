<template>
  <h3>{{ task.text }}</h3>
</template>

<script>
export default {
  // name used to import into Tasks.vue
  name: "Task",
  // props value is pulled from v-for in Tasks.vue from array in App.vue
  props: {
    task: Object,
  },
};
</script>

<style scoped></style>
<!-- good practice to break down the UI into indivdual pieces -->
<!-- takes a single task as a prop and the type is an Object -->
<!-- import into Tasks.vue and register it as a component -->
<!-- you now have access to each solo task -->
<!-- add new component to Tasks.vue -->
