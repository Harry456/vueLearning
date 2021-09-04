<template>
  <div id="root">
    <h2>Child Component</h2>
    <p>{{ id }} - {{ name }} - {{ age }} - {{ isDev ? 'True' : 'False' }}</p>
    <button @click="DeleteUser">DeleteUser</button>

    <br />
    <br />
    <div class="custom_event">
      <h2>Custom Events - Child Component</h2>
      <p>Trigerring data manipulation three level upwards.</p>
      <p>
        Onclick box will appear which is in app component. Btn is in grandChild
        component
      </p>
      <button @click="toggleColor" class="btn">Toggle Box</button>
    </div>
    <!-- Alternative way for data manipulating -->
    <div class="callbackFunction">
      <h3>CallBack Function</h3>
      <p>Alternative way for data manipulating - In Parent Function</p>
      <p>1st Child: {{ fullName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  // props: ['name', 'age'],
  props: {
    id: Number,
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 25,
      // validator: function(value) {
      //   console.log(
      //     'This will return true or false value based on the valiadting logic for our needs'
      //   );
      // },
    },
    isDev: {
      type: Boolean,
    },
    fullName: String,
  },
  methods: {
    DeleteUser() {
      this.$emit('Delete-User', this.id);
    },
    toggleColor() {
      this.$emit('toggle', 'Hello toggle');
    },
  },
};
</script>

<style></style>
