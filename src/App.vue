<template>
  <div id="app">
    <FirstComponent />
    <Events />
    <DataBinding />
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import Events from './components/Events.vue';
import DataBinding from './components/DataBinding.vue';

export default {
  name: 'App',
  components: {
    FirstComponent,
    Events,
    DataBinding,
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
