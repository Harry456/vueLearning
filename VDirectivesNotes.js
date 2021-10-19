/*
Build In V-Directives:
v-text="'someText'" - will render the text in DOM.
v-html="'<strong>hello world</strong>'" - will render the html in DOM.


Custom Directives:
In order to have our own directives, we have to register it globally.
1.Global Directives. - Can use all over app
2.Custom Directives - specific to component.

Eg:
Vue.directive('highlight', {});
1st argument is directive name:
2nd Argument is directive config option
Five  hooks a directive has to config.
  1.bind(el,binding,vnode) - Once Directive is Attached. -> fired as soon as our directive is bound to the element so as soon as we get access to the element therefore. Here we get three arguments passed into this method.
  el -> el argument refers to the element the directive sits on.
  binding -> 
  vnode -> vnode refers to the node in the virtual dom,
  binding -> 

  2.inserted(el,binding,vnode) -  as soon as it is inserted in the dom, so as soon as this element alters part of the dom but we can access it in the first hook already, that's important to understand,

  3.update(el,binding,vnode,oldnode) - once component is updated.(without children)

  4.componenetUpdated(el,binding,vnode,oldnode) - once component is updated(with childrent)
  5.unbind(el,binding,vnode) - once Directive is removed.


bind() eg:
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // First life cycle hook for custom directive.
    el.style.backgroundColor = 'green';
    el.style.color = binding.value.
  },
  var delay = 0;
  if(binding.modifiers['delayed]){
    delay=3000;
  }
});
binding.value = what ever the value we pass in the customdirective. v-highlight="'white'" . binding.value = white



Custom directive implementation:
<h2 v-highlight:background.delayed="'red'">Custom Directives</h2>
background -> arg -> accesss by bindind.arg in custom Directive creation.
delayed -> modifier -> accesss by bindind.modifiers['delayed'] in custom Directive creation.
red -> value -> accesss by bindind.value in custom Directive creation.

*/
