// Data Binding
/*
v-bind:
{{}} are used to render variables in Html, but only inside a html tag,
{{}} not used to render a variable in a attribute, inorder to use a variable value in a attribute we need to use v-bind syntax
v-bind:attributeName
v-bind:href="link" / link = www.google.com Now this data bind dynamically.

v-once:
Disable Re-Rendering With v-once.
Once the value is updated in done, it can't be changed even if it updated later

v-html:
If we want to a html content in out template inside any element, then we want to specify v-html.This will render the html content which is actually a string will be rendered as html in DOM.
EG:
finishedLink = "<a href="https://www.google.com">Google</a>"

***Events***
v-on:  This will listen on something, something means some event's 
Eg: DOM Events
v-on:click="functionName"

function With argument and event Object
v-on:click="functionName(arg,$event)"
$event = event object -> to capture the event object we need to use $event when we have argeument in function, otherwise we can access the event object in the callback method.


Event Modifier:
Eg:
stopPropagation:function(e){
			e.stopPropagation()
			// Alternation For this function is event modifier .Eg is down below
		}
  This is event modifier 
  v-on:mousemove.stop => stop propagation
  v-on:mousemove.prevent => Prevent Default 
  Eg:
  <span v-on:mousemove.stop="stopPropagation">Stop Propagation</span>	


Key Modifier:
<input type="text" v-on:keyup.enter.space="alert" placeholder="keyUpEvent - enter&space">
Keyup event only triggers for space and enter key. we are modifying it.

Two Way Binding.
*/
