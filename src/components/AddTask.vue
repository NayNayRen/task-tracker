<template>
  <form class="add-form">
    <div class="form-control">
      <label for="text">Task</label>
      <input type="text" name="text" placeholder="Add a Task" />
    </div>
    <div class="form-control">
      <label for="day">Day & Time</label>
      <input type="text" name="day" placeholder="Add Day & Time" />
    </div>
    <div class="form-control form-control-check">
      <label for="reminder">Set Reminder</label>
      <input type="checkbox" name="reminder" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control label {
  display: block;
}

.form-control-check {
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

.form-control-check input {
  -ms-flex: 2;
  -webkit-box-flex: 2;
  flex: 2;
  height: 20px;
}

.form-control-check label {
  -ms-flex: 1;
  -webkit-box-flex: 1;
  flex: 1;
}
</style>
