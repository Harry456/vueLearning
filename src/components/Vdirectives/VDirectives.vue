<template>
  <div id="root">
    <div class="container">
      <h2>Built-In Directives</h2>
      <p v-text="'sometext'"></p>
      <p v-html="'<strong>Inject Html Element.</strong>'"></p>

      <h2 v-highlight:background.delayed="'red'">Custom Directives</h2>
      <p v-local-highlight:background.delayed.blink="'green'">
        Local Directive
      </p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers.blink) {
          let mainColor = binding.value;
          let secondColor = 'blue';
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = binding.value;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
