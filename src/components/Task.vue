<template>
  <!-- v-bind the class and you can do a ternary -->
  <!-- if task.reminder is true add reminder class, else add nothing -->
  <!-- still keep the default task class -->
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>{{ task.text }} <i class="fas fa-times"></i></h3>
    <p>{{ task.day }}</p>
  </div>
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

<style>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  cursor: pointer;
  margin: 5px;
  padding: 10px 20px;
}

.task h3 {
  -ms-flex-align: center;
  -ms-flex-pack: justify;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  align-items: center;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  justify-content: space-between;
}

.task.reminder {
  border-left: 5px solid green;
}
</style>
<!-- good practice to break down the UI into indivdual pieces -->
<!-- added font awesome cdn to ./public/index.html -->
<!-- added font awesome icon to solo task h3 -->
<!-- takes a single task as a prop and the type is an Object -->
<!-- import into Tasks.vue and register it as a component -->
<!-- you now have access to each solo task -->
<!-- add new component to Tasks.vue -->
