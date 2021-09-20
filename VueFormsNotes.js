/*
EG:In react We capture form value in component state and submit whereever needed.

v-model:
In vue.js if we want to be in sync with input value we need to use v-model in the input field.
we can use variable inside data object to store the input value. we are not usiong onChange like react insted we use v-model.

data(){
  return {
    userData:{
      email:"",
      password:""
    }
  }
}

v-model:
v-model is a combination of :value @ @input event:
<input :value="userData.email" @input="userData.email = $event.target.value" />

v-model.lazy: Modifier. kinda change event.
this will update the state only after leaving the input field.
<input v-model.lazy="email" />

v-model.number: Modifier
Will force to transform the type from text to number



*/
