<template>
  <div id="app">
    <!-- <FirstComponent />
    <Events />
    <DataBinding />
    <Computed /> -->
    <!-- <app-quote></app-quote> -->
    <h1>This is app</h1>
    <appQuote>
      <h1 slot="title">{{ quoteTitle }}</h1>
      <h2 slot="content">A wonderful quote</h2>
    </appQuote>
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import Events from './components/Events.vue';
import DataBinding from './components/DataBinding.vue';
import Computed from './components/Computed.vue';
import Quote from './components/AdvanceComponent/Quote.vue';

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
  },
  data() {
    return {
      quoteTitle: 'This is Quote Title',
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
