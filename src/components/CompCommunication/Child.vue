<template>
  <div id="root">
    <h2>Child Component</h2>
    <p>{{ id }} - {{ name }} - {{ age }} - {{ isDev ? 'True' : 'False' }}</p>
    <button @click="DeleteUser">DeleteUser</button>
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
  },
  methods: {
    DeleteUser() {
      console.log(this.id);
      this.$emit('Delete-User', this.id);
    },
  },
};
</script>

<style></style>
