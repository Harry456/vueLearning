<template>
  <div id="root">
    <h2>This is Component One</h2>
    <p>{{ counter }}</p>
    <button @click="counter++">increase</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  destroyed() {
    console.log('component Destroyed');
  },
};
</script>

<style></style>
