<template>
  <div id="app">
    <!-- <FirstComponent />
    <Events />
    <DataBinding />
    <Computed /> -->
    <<<<<<< HEAD
    <!-- <appQuote>
      <h1 slot="title">{{ quoteTitle }}</h1>
      <h2 slot="content">A wonderful quote</h2>
    </appQuote> -->
    <button @click="selectedComponent = 'appQuote'">AppQuote</button>
    <button @click="selectedComponent = 'One'">ComponentOne</button>
    <button @click="selectedComponent = 'Two'">ComponentTwo</button>
    <keep-alive>
      <component :is="selectedComponent">
        <h1 slot="title">{{ quoteTitle }}</h1>
        <h2 slot="content">A wonderful quote</h2>
      </component>
    </keep-alive>
    =======

    <!-- Advanved Component Usage -->
    <Parent />
    >>>>>>> 89bc973fa722d28a9ee3b50d53b2a9d0cd6b5b9d
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import Events from './components/Events.vue';
import DataBinding from './components/DataBinding.vue';
import Computed from './components/Computed.vue';
import Quote from './components/AdvanceComponent/Quote.vue';
import One from './components/AdvanceComponent/One.vue';
import Two from './components/AdvanceComponent/Two.vue';

export default {
  name: 'App',
  // components: {
  //   FirstComponent,
  //   Events,
  //   DataBinding,
  //   Computed,
  //   Quote,
  // },
  components: {
    appQuote: Quote,
    One,
    Two,
  },
  data() {
    return {
      quoteTitle: 'This is Quote Title',
      selectedComponent: 'appQuote',
    };
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

  // This is child Component Styling
  .quoteRoot {
    h1 {
      color: red;
    }
  }
}
</style>
