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