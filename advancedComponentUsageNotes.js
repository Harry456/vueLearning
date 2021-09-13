// Event Bus
/*
Usage of event bus is to pass data to all child components, assume like state management. but not using any state management tools.

Before Going to eventBus,understand all vue instance have the $emit method on it. so eventbus concept is creating a vue instance in main.js file where the root app lives in, 
EG: export const eventBus = new Vue()
This instance have access in all other components, 

Child $emits a event and parent catches that event and manipulate data and viceversa. key note this eventBus instance is availale in all our the component in our app.

Refer EventBus Folder - Parent and child component.
Components/Eventbus/Parent.vue
Components/Eventbus/Child.vue

// Emit a event that  is accessable all over the app.
eventBus.$emit("changeUserName", "John Smith"); 
// Catches the emitted by $on event in anywhere from App.
eventBus.$on("changeUserName", (userName) => {
      console.log("i'm ran from eventbus on");
      this.name = userName;
});
The event object has access to the data passed while emitting a event.

*/
