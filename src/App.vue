<template>
  <div id="app">
    <button @click="selectedComponent = 'appQuote'">AppQuote</button>
    <button @click="selectedComponent = 'One'">ComponentOne</button>
    <button @click="selectedComponent = 'Two'">ComponentTwo</button>
    <button @click="selectedComponent = 'Form'">Forms</button>
    <keep-alive>
      <component :is="selectedComponent">
        <h1 slot="title">{{ quoteTitle }}</h1>
        <h2 slot="content">A wonderful quote</h2>
      </component>
    </keep-alive>

    <!-- Advanved Component Usage -->
    <!-- <Parent /> -->
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import Events from './components/Events.vue';
import DataBinding from './components/DataBinding.vue';
import Computed from './components/Computed.vue';
import Parent from './components/EventBus/Parent.vue';
import Quote from './components/AdvanceComponent/Quote.vue';
import One from './components/AdvanceComponent/One.vue';
import Two from './components/AdvanceComponent/Two.vue';
import Form from './components/Forms/Form.vue';

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
    Form,
  },
  data() {
    return {
      quoteTitle: 'This is Quote Title',
      selectedComponent: 'Form',
    };
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
