<template>
  <div id="root">
    <h2>Child Three</h2>
    <h3>Change a event to change age value in child two</h3>
    <button @click="changeAge">ChangeAgeTriggerChildThree</button>
  </div>
</template>

<script>
export default {
  name: 'ChildThree',
  data() {
    return {};
  },
  methods: {
    changeAge() {
      this.$emit('changeAgeValue', 26);
    },
  },
};
</script>

<style></style>
