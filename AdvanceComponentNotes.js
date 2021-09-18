// Two Ways of registering component
/*
1) Register with actual component name like Quote and use it like 
<template>
<Quote/>
</template>
export default {
  components: {
    Quote,
  }
};

2) Register with new Name to the imported component 
<template>
  <app-quote></app-quote>
</template>
export default {
   components: {
     appQuote: Quote,
   },
};

*/

// Vue Js Slots:

/*
Slot tag is a reserved keyword in vue js.
<slot></slot> we pass this inside the child component to render the html content that are passed inside the child component where it was called.
Eg:
App
<template>
  <childComponent>
    <h2>This is the html need to render in child component but content is dynamically injected from parentn component when the child is called. in order to this is take place in need to pass <slot></slot> tag in child component like a placeholder. </h2>
  </childComponent>
</template>

ChildComponent
<template>
  <slot></slot>
</template>

Style:
Even though the content dynamically passed from parent, we can style this component from both parent and child.
Style done in parent compoent for child.
.quoteRoot {
  h1 {
    color: red;
  }
}

Style done in child compoent in child component itself:
.quoteRoot {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #000;
  padding: 30px;
  margin: 30px;
  text-align: center;
}

Dynamic Content:
Any value that need to passed to the child from parent,we can use {{variableName}}  that is inside in parent data object. That it accessable in child component.The parent <template> have access to the data object.


// Name Slots:
<h2 slot="title">Title</h2>
<p slot="content">Content</p>

The above is called slot naming. We have call this in child by refereing to the slot name:

<child>
  <div>
    <slot name="title" ></slot>
  </div>
  <div>
    <slot name="content" ></slot>
  </div>
</child>

The unnamed slot are defaults slots.  

*/

// Loading Component Dynamically:
