<template>
  <header>
    <!-- prop from below -->
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  // name used to import into App.vue
  name: "Header",
  props: {
    title: String,
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
