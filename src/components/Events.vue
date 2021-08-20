<template>
  <div class="events">
    <div class="counter">
			<button v-on:click="increase">Increase Count</button>
			<button v-on:click="decrease">Decrease Count</button>
			<button v-on:click="reset">Reset Count</button>
			<p>{{ counter }}</p>
    </div>
		<div class="mouseEvent">
			<p v-on:mousemove="updateCordinates">Cordinates: {{ x }} / {{ y }}

				<!-- <span v-on:mousemove="stopPropagation">Stop Propagation</span>	 -->
				<span v-on:mousemove.stop="stopPropagation">Stop Propagation</span>	
			</p>
		</div>
		<!-- To capture Default $event argument while passing multiple argument to a function -->
		<div class="eventArgument">
			<button v-on:click="increaseByNum(2,$event)">IncreaseByTwo</button>
			<p>{{ counter }}</p>
		</div>
		<div class="keyEvent">
			<p>key modifier - alert will pop up on keyUp event. using key moifier we will alert on "enter" and "spacebar" key up</p>
			<input type="text" v-on:keyup.enter.space="alert" placeholder="keyUpEvent - enter&space">
		</div>
		<div class="simplecomdition">
			<p>{{counter > 10 ? "Greate Than 10" : "Smallert than 10"}}</p>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      counter: 0,
			x:0,
			y:0
    };
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    decrease: function() {
      this.counter--;
    },
    reset: function(e){
      this.counter = 0
    },
		updateCordinates:function (e){
			this.x = e.clientX
			this.y = e.clientY
		},
		increaseByNum:function(num,event){
			console.log(event)
			this.counter+=num
		},
		stopPropagation:function(e){
			e.stopPropagation()
			// Alternation FOr this function is event modifier
		},
		alert:function(){
			alert('Alert')
		}
  },
};
</script>

<style scoped>
  .events{
    margin-top: 2rem;
  }

</style>>
</style>
