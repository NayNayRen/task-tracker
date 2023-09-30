<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label for="text">Task</label>
      <!-- v-model binds the data to the element for use with the this keyword -->
      <input type="text" v-model="text" name="text" placeholder="Add a Task" />
    </div>
    <div class="form-control">
      <label for="day">Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label for="reminder">Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
// set default values for page load
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    // prevents the form submission
    onSubmit(e) {
      e.preventDefault();
      // if text is empty
      if (!this.text) {
        alert("Please add a task.");
        return;
      }
      // creates a new task
      const newTask = {
        // id: Math.floor(Math.random() * 10000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      // console.log(newTask);
      // emits the new data up a level to App.vue
      this.$emit("add-task", newTask);
      // resets values when done
      (this.text = ""), (this.day = "");
      this.reminder = false;
    },
  },
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
  margin: 5px 0;
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
