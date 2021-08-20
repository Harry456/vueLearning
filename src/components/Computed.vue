<template>
  <div class="computed">
    <h1>Computed</h1>
    <button v-on:click="counter++">Increase</button>
    <button v-on:click="counter--">Decrease</button>
    <button v-on:click="secondCounter++">Increase Second</button>
    <p>First Counter: {{ counter }} | Second Counter: {{ secondCounter }}</p>
    <p>{{ result() }}</p>
    <p>{{ output }}</p>
  </div>
</template>

<script>
export default {
  name: 'Computed',
  data() {
    return {
      counter: 0,
      secondCounter: 0,
    };
  },
  computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    },
  },
  methods: {
    result: function() {
      console.log('Methods run');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    },
  },
};
</script>

<style></style>
