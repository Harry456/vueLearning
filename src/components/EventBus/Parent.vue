<template>
  <div id="root">
    <h1>EventBus implementation</h1>
    <Child :userName="name" :userAge="age" />
    <button @click="passDataToChild">setUserAge - (TriggerFromParent)</button>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
import Child from "./Child.vue";

export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      name: "john",
      age: 0,
    };
  },
  created() {
    console.log("im created ran");
    eventBus.$on("changeUserName", (userName) => {
      console.log("i'm ran from eventbus on");
      this.name = userName;
    });
  },
  methods: {
    passDataToChild() {
      eventBus.$emit("setUserAge", 25);
    },
  },
};
</script>

<style></style>
