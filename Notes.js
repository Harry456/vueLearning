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

Important Note:
Data object is not reactive.

Computed:
Question is Why use Computed?
UNDERSTAND the data,and methods first,
Whenever a value changes inside data function object, at that time the by default VUE call's all the methods's inside the method object. Data changes -> method run = DOM re-render
But in case if value of a property change inside data object by some event,
For Eg: we have x and y in data object

"The property that was related to computed with data object, if that property changes in data object in that case alone Computed runs, other properties in data object changes due to any event,that will not run Computed object coz that property was not connected with data and computed object."
Computed are treated as Normal Property even though they hold a method.They are executed in DOM as variable name not to use function syntax
Eg:
computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    },
  },
Output Holds method but while calling this in DOM looks like {{output}} not like this {{output()}}

Conclusion:
Whenever data updates, methods run. even data properties is not related with methods.i.e we are not using that data value in method
data updates -> computed run only when the data is related with computed.

It doesn't know if the change of second counter influences the result method and therefore it re-executes
this method as well.
keep in mind, everything stored in computed can be used just like you use a property in the data object.

*/
