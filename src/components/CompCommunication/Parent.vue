<template>
  <div id="root">
    <h2>I'm Parent Component</h2>
    <Child
      v-for="user in userDetails"
      :key="user.name"
      :id="user.id"
      :name="user.name"
      :age="user.age"
      :isDev="user.isDev"
      @Delete-User="deleteUser"
    />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  name: 'Parent',
  components: {
    Child,
  },
  data() {
    return {
      userDetails: [
        {
          id: 1,
          name: 'Ben',
          age: 25,
          isDev: true,
        },
        {
          id: 2,
          name: 'john',
          age: 24,
          isDev: true,
        },
        {
          id: 3,
          name: 'jane',
          age: 23,
          isDev: false,
        },
      ],
    };
  },
  methods: {
    deleteUser(e) {
      console.log(e, 'From Parent');
      this.userDetails = this.userDetails.filter((user) => user.id !== e);
    },
  },
};
</script>

<style></style>
