<template>
  <!-- @ is shorthand for v-on -->
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  // name used to import into Header.vue
  name: "Button",
  // props value is set in Header.vue
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>
