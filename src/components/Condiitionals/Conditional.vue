<template>
  <div id="root">
    <div class="ifElse">
      <h2>IF & Else Statement</h2>
      <p v-if="show">Now you can see me! 😄</p>
      <p v-else>Now you can't can see me😮</p>
      <button @click="show = !show">See Me</button>
    </div>
    <!-- If,Else if & else -->
    <div class="elseIf">
      <h2>If, ElseIf & Else</h2>
      <p>Num: {{ num }}</p>
      <p v-if="num >= 1 && num <= 5">
        "num >= 1 && num <= 5" = If Statement Executed
      </p>
      <p v-else-if="num >= 6 && num <= 10">
        Contition : "num >= 6 && num <= 10" = Else If Statement Executed
      </p>
      <p v-else>Else Statement Executed</p>
      <button @click="num++">Increase Num</button>
    </div>
    <!-- Template Tag - Wrapper Tag. -->
    <template v-if="show">
      <h2>Hello World</h2>
      <h3>Good Morning World</h3>
    </template>
    <div v-show="show">
      <p>Using v-show</p>
    </div>

    <!-- Conditional rendering Looping -->
    <div class="looping">
      <h2>Conditional Looping</h2>
      <ul>
        <li v-for="(fruit, idx) in fruits" v-bind:key="idx">
          {{ idx + 1 }} - {{ fruit }}
        </li>
      </ul>
      <!-- Grouping Element -->
      <div v-for="(fruit, idx) in fruits" v-bind:key="idx">
        <h1>{{ fruit }}</h1>
        {{ idx }}
      </div>
      <hr />
      <!-- Looping via Object  -->
      <ul>
        <li v-for="(person, idx) in persons" v-bind:key="idx">
          <!-- Looping in object - extracting key value pairs -->
          <div v-for="(value, key, index) in person" v-bind:key="index">
            {{ key }} : {{ value }} ({{ index }})
          </div>
        </li>
      </ul>
      <!-- Looping Via Numbers -->
      <ul>
        <span>prev</span>
        <span class="numBox" v-for="n in 5" v-bind:key="n">{{ n }}</span>
        <span>next</span>
      </ul>

      <!-- Deleting Item - My Try - Tracking of elements -->
      <div class="wrapper">
        <h2>Keeping Track of Items</h2>
        <div class="fruits">
          <ul>
            <li v-for="(fruit, idx) in fruits" :key="idx">
              {{ fruit }}
              <span class="deleteBtn" @click="deleteItem(idx, $event)">X</span>
            </li>
          </ul>
          <!-- Removed Fruits Tracked Here -->
          <ul class="removedFruits">
            <li v-for="(fruit, idx) in trash" :key="idx">
              Removed Fruit - {{ fruit }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Single Object -->
      <div v-for="(value, key, idx) in user" :key="value">
        <h1>{{ key.toUpperCase() }}: {{ value }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conditional',
  data() {
    return {
      show: true,
      num: 0,
      fruits: ['apple', 'mongo', 'berry', 'orange', 'grapes'],
      persons: [
        { name: 'John', age: 25, role: 'developer' },
        { name: 'Smith', age: 26, role: 'designer' },
      ],
      trash: [],
      user: {
        name: 'harry',
        age: 26,
        role: 'dev',
      },
    };
  },

  methods: {
    deleteItem: function(idx, e) {
      // Removed Item
      let removed = this.fruits.filter((item, index) => idx === index);
      console.log(removed, 'removed');

      this.fruits = this.fruits.filter((item, i) => idx !== i);
      this.trash.push(...removed);
      console.log(this.trash, 'trash');
    },
  },
};
</script>

<style lang="scss" scoped>
#root {
  margin: 2rem 0;

  .numBox {
    padding: 0.5rem;
    margin: 1rem 0.25rem;
    background: blue;
    color: #fff;
  }

  .fruits {
    display: flex;
    justify-content: space-evenly;

    .removedFruits {
      padding: 0.5rem;
      border: 1px solid red;
      min-width: 300px;
      min-height: 10px;
    }
  }

  .deleteBtn {
    padding: 0.5rem;
    cursor: pointer;
  }
}
</style>
