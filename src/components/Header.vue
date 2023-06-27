<template>
  <header>
    <h1>Task Tracker</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

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
