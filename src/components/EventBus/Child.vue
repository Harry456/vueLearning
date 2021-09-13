<template>
  <div id="root">
    <h2>{{ userName }}</h2>
    <h2>Age: {{ age }}</h2>
    <button @click="changeName">Change Name (TriggerFromChild)</button>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  userName: "Child",
  props: {
    userName: {
      type: String,
    },
    userAge: Number,
  },
  data() {
    return {
      age: this.userAge,
    };
  },
  methods: {
    changeName() {
      eventBus.$emit("changeUserName", "John Smith");
    },
  },
  created() {
    eventBus.$on("setUserAge", (userAge) => {
      this.age = userAge;
    });
  },
};
</script>

<style></style>
