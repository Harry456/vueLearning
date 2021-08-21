<template>
  <div id="cssClasses">
    <h2>Working with classes</h2>
    <!-- <div class="demo" :class="{ danger: !toggle, info: toggle }">
      <p>This section to check toggle class</p>
      <button @click="toggle = !toggle">Toggle Bg</button>
    </div> -->
    <!-- ALternation method for above is divClasses object declated in computed property. -->
    <div class="demo" :class="divClasses">
      <p>This section to check toggle class</p>
      <button @click="toggle = !toggle">Toggle Bg</button>
    </div>
    <!-- Changing color via input field via v-model-->
    <div class="demo" :class="[color, { danger: !toggle }]">
      <p>change color using input.adding classes via input v-model</p>
      <input type="text" v-model="color" />
    </div>
    <div class="demo" :class="[color, { danger: !toggle }]">
      <p>Using Style via bind :style</p>
      <input type="text" v-model="color" />
    </div>
    <div class="demo" :style="[myStyle, { height: boxWidth + 'px' }]">
      <p>
        Using Style via bind :style <br />
        Try Change My BG Color
      </p>
      <input type="text" v-model="bgColor" />
      <input type="text" v-model="boxWidth" placeholder="width" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssClasses',
  data() {
    return {
      toggle: false,
      color: 'green',
      bgColor: 'gray',
      boxWidth: 150,
    };
  },
  computed: {
    divClasses: function() {
      return {
        danger: this.toggle,
        info: !this.toggle,
      };
    },
    myStyle: function() {
      return {
        background: this.bgColor,
        width: this.boxWidth + 'px',
      };
    },
  },
};
// Note:Usage of computed - toggle data is related with data.
</script>

<style scoped>
#cssClasses {
  margin-top: 2.5rem;
}

.demo {
  width: 100%;
  height: 100px;
  margin: 1rem 0;
}

.danger {
  background: red;
}
.info {
  background: blue;
}
.green {
  background: green;
}
</style>
