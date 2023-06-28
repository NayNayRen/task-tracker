<template>
  <header>
    <!-- prop from below -->
    <h1>{{ title }}</h1>
    <!-- text and color props from Button.vue -->
    <Button text="Add Task" color="green" />
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  // name used to import into App.vue
  name: "Header",
  // props value is set in App.vue
  props: {
    title: String,
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
