<template>
  <div class="quoteRoot">
    <div>
      <slot name="title"></slot>
    </div>
    <hr />
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
};
</script>

<style scoped lang="scss">
.quoteRoot {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #000;
  padding: 30px;
  margin: 30px;
  text-align: center;
}
</style>
