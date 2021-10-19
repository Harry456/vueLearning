import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Global Directives.
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // First life cycle hook for custom directive.
    // (el.style.backgroundColor = 'green'),
    // Changin color.
    // (el.style.color = binding.value);
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
