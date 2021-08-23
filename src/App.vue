<template>
  <div id="app">
    <!-- <FirstComponent />
    <Events />
    <DataBinding />
    <Computed />
    <CssClasses />
    <Conditional />
    <Basic /> -->
    <!-- <LifeCycle /> -->
    <Parent />
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import Events from './components/Events.vue';
import DataBinding from './components/DataBinding.vue';
import Computed from './components/Computed.vue';
import CssClasses from './components/CssClasses.vue';
import Conditional from './components/Condiitionals/Conditional.vue';
import Basic from './components/UnderStandingVue/Basic.vue';
import LifeCycle from './components/UnderStandingVue/LifeCycle.vue';
import Parent from './components/CompCommunication/Parent.vue';

export default {
  name: 'App',
  components: {
    FirstComponent,
    Events,
    DataBinding,
    Computed,
    CssClasses,
    Conditional,
    Basic,
    LifeCycle,
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
