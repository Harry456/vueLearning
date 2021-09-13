<template>
  <div id="app">
    <!-- <FirstComponent />
    <Events />
    <DataBinding />
    <Computed /> -->

    <!-- Advanved Component Usage -->
    <Parent />
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
import Events from "./components/Events.vue";
import DataBinding from "./components/DataBinding.vue";
import Computed from "./components/Computed.vue";
import Parent from "./components/EventBus/Parent.vue";

export default {
  name: "App",
  components: {
    FirstComponent,
    Events,
    DataBinding,
    Computed,
    Parent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
