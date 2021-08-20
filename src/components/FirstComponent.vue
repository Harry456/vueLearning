<template>
  <div>
    <h1 v-once>{{ title }}</h1>
    <p>
      {{ changeTitle() }}
    </p>
    <div v-html="finishedLink"></div>
    <div class="nest">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  data() {
    return {
      title: 'This is My First Component',
      finishedLink: "<a href='https://www.google.com'>Google</a>",
    };
  },
  methods: {
    changeTitle: function() {
      // By updating the title value, it not gonna change the heading element, coz we have used v-once.
      this.title = 'New Title';
      return this.title;
    },
  },
};
</script>

<style></style>
