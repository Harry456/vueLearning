<template>
  <div id="root">
    <h2>Child Two</h2>
    <!-- Alternative way for data manipulating -->
    <div class="callbackFunction">
      <h3>CallBack Function</h3>
      <p>Alternative way for data manipulating - In Parent Function</p>
      <p>Child:<button @click="fullName()">Get Full Name</button></p>
    </div>

    <h3>Purpose - Changing age value from child three</h3>
    <p>age: {{ ageValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildTwo',
  data() {
    return {};
  },
  props: {
    fullName: Function,
    ageValue: {
      type: Number,
    },
  },
};
</script>

<style></style>
