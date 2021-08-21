<template>
  <div id="root">
    <div class="ifElse">
      <h2>IF & Else Statement</h2>
      <p v-if="show">Now you can see me! 😄</p>
      <p v-else>Now you can't can see me😮</p>
      <button @click="show = !show">See Me</button>
    </div>
    <!-- If,Else if & else -->
    <div class="elseIf">
      <h2>If, ElseIf & Else</h2>
      <p>Num: {{ num }}</p>
      <p v-if="num >= 1 && num <= 5">
        "num >= 1 && num <= 5" = If Statement Executed
      </p>
      <p v-else-if="num >= 6 && num <= 10">
        Contition : "num >= 6 && num <= 10" = Else If Statement Executed
      </p>
      <p v-else>Else Statement Executed</p>
      <button @click="num++">Increase Num</button>
    </div>
    <!-- Template Tag - Wrapper Tag. -->
    <template v-if="show">
      <h2>Hello World</h2>
      <h3>Good Morning World</h3>
    </template>
    <div v-show="show">
      <p>Using v-show</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conditional',
  data() {
    return {
      show: true,
      num: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
#root {
  margin: 2rem 0;
}
</style>
