<template>
  <div id="app">
    <FirstComponent />
    <Events />
    <DataBinding />
    <Computed />
    <CssClasses />
    <Conditional />
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import Events from './components/Events.vue';
import DataBinding from './components/DataBinding.vue';
import Computed from './components/Computed.vue';
import CssClasses from './components/CssClasses.vue';
import Conditional from './components/Condiitionals/Conditional.vue';

export default {
  name: 'App',
  components: {
    FirstComponent,
    Events,
    DataBinding,
    Computed,
    CssClasses,
    Conditional,
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
