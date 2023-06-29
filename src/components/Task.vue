<template>
  <!-- v-bind(:) the class and you can do a ternary -->
  <!-- if task.reminder is true add reminder class, else add nothing -->
  <!-- still keep the default task class for styles -->
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  // name used to import into Tasks.vue
  name: "Task",
  // props key is pulled from v-for in Tasks.vue from array in App.vue
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

<!-- ADD EMIT EVENT step 1, step 2 in Tasks.vue -->
<!-- add the @click event to fa icon element -->
<!-- use $emit(), pass it any name you like(delete-task), along with the task.id as parameters -->
<!-- we are emitting up a level in order to get the task's data -->

<!-- TOGGLE REMINDER step 1 -->
<!-- add the @dblClick event to the div container -->
<!-- use $emit(), pass it any name you like(toggle-reminder), along with the task.id as parameters -->
<!-- we are emitting up a level in order to get the task's data -->
