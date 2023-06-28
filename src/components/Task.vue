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
