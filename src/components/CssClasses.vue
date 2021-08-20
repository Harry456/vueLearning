<template>
  <div id="cssClasses">
    <h2>Working with classes</h2>

    <div class="demo" :class="{ danger: toggle, info: !toggle }">
      <p>This section to check toggle class</p>
      <button @click="toggle = !toggle">Toggle Bg</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssClasses',
  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style scoped>
#cssClasses {
  margin-top: 2.5rem;
}

.demo {
  width: 100%;
  height: 100px;
  margin: 1rem 0;
}

.danger {
  background: red;
}
.info {
  background: blue;
}
</style>
