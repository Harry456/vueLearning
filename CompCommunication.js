/*
Props:
Passing data from one component to another.
Vue Props - Unidirectional Data Flow:
The data passed as prop can be only changed in Parent COmponent not in child component.

If we want to change this, there are two ways of doing that.
The first way of doing it, is that
1.We let the parent know that we'd like to change this.
2.We can save the prop value in child data object for some variable and render that variable. Even if we want to modify the data, we can change the data stored in data object variable not the original props.


Emitting event:
If a component should talk to its parent and let the parent know that something happened, that component should emit an event to which the parent can listen. And indeed you can emit your own custom events inside of your Vue components.

Passing Data Working in UniDirectional.
For:
Eg: Parent can pass data to children,but one child can't pass data to another sibling.
If we want to do that we want pass the data from one child to parent and send that data to another child. Basically passing data upwards. 
Passing data from child to parent
1.with custom event;
2.Via callback functions

*/
