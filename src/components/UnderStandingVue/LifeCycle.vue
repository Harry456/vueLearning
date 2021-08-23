<template>
  <div id="root">
    <h1>LifeCycle Method</h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',

  methods: {},
  beforeCreate() {
    console.log('beforeCreate - 1');
  },
  created() {
    console.log('Created - 2');
  },
  beforeMount() {
    console.log('BeforeMount - 3');
  },
  mounted() {
    console.log('mounted - 4');
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    console.log('at which point of time we still see the app. - 5');
  },
  destroyed() {
    console.log('Completely removed');
  },
  // Vue - 3 beforeUnmount & unmounted
  // beforeUnmount() {
  //   console.log('at which point of time we still see the app. - 5');
  // },
  // unmounted() {
  //   console.log('Completely removed');
  // },
};
</script>

<style></style>
