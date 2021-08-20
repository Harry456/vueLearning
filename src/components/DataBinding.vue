<template>
  <div class="root">
    <h1>Data Binding</h1>
    <ul>
      <li>
        <input type="text" v-model="name" />
        <span>userName</span>=<span>{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data() {
    return {
      name: 'harry',
    };
  },
};
</script>

<style></style>
