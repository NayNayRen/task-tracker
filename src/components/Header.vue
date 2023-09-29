<template>
  <header>
    <!-- prop from below -->
    <h1>{{ title }}</h1>
    <!-- text and color props from Button.vue -->
    <!-- text and color are v bound to say if showAddTask is true(?) then say Close and be red, else(:) say Add Task and be green -->
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  // name used to import into App.vue
  name: "Header",
  // props value is set in App.vue
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<!-- styles specific to this component only -->
<style scoped>
header {
  -ms-flex-align: center;
  -ms-flex-pack: justify;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  align-items: center;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
