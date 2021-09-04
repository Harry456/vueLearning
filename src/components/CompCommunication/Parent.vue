<template>
  <div id="root">
    <h2>I'm Parent Component</h2>
    <!-- <Child
      v-for="user in userDetails"
      :key="user.name"
      :id="user.id"
      :name="user.name"
      :age="user.age"
      :isDev="user.isDev"
      @Delete-User="deleteUser"
      @toggle="toggleColor"
      :fullName="name"
    /> -->
    <h2>ParentName: {{ name }}</h2>

    <ChildTwo :fullName="callbackFunc" :ageValue="age" />
    <ChildThree @changeAgeValue="passValueChildTwo" />
  </div>
</template>

<script>
import Child from './Child.vue';
import ChildTwo from './ChildTwo.vue';
import ChildThree from './ChildThree.vue';

export default {
  name: 'Parent',
  components: {
    Child,
    ChildTwo,
    ChildThree,
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
      name: 'John',
      age: 25,
    };
  },
  methods: {
    deleteUser(e) {
      console.log(e, 'From Parent');
      this.userDetails = this.userDetails.filter((user) => user.id !== e);
    },
    toggleColor(e) {
      console.log(e, 'from parent');
      this.$emit('toggle', e);
    },
    callbackFunc() {
      this.name = 'John Smith';
    },
    passValueChildTwo(e) {
      this.age = e;
      console.log(this.age);
    },
  },
};
</script>

<style></style>
