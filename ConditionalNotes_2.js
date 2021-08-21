/*
IF Else Statement:
<p v-if="show">Now you can see me! 😄</p>
<p v-else>Now you can't can see me😮</p>
<button @click="show = !show">See Me</button>

Script:
data() {
    return {
      show: true,
    };
},

Explanation: "If" show variable is true first "p" tag will be displayed, or else statement will run.
v-if = for if statement.
v-else-if = else if statement
v-else - For else Statement.
Format:
v-if="condition"
v-esle-if="condition"
v-else="condition"

V-show: - will element will hide the element from DOM by settin the display property to none - display:none
v-show = display:none 


Looping:
Looping on Array:
Format: v-for="(iterator,idx) in Array" v-bind:key="idx"
<div v-for="(fruit, idx) in fruits" v-bind:key="idx">
  <h1>{{ fruit }}</h1>
  {{ idx }}
</div>
This will create No of above markup based on the array length. Eg:array has 5 items -> UI will have 5 Div

Looping on Object: Looping on object means getting key value pairs:
Format: v-for="(value, key, index) in ObjectName" v-bind:key="index"
 <div v-for="(value, key, index) in person" v-bind:key="index">
    {{ key }} : {{ value }} ({{ index }})
</div>
*/
