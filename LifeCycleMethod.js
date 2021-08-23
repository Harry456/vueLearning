/*
LifeCycle Method:

Creation LifeCycle:
1.beforeCreate(){
  You wont anything on screen
  This run event before vue app not be fully iniliazed
}

2.created(){
At this point of time,the Vue app was initialized internally, but it was not mounted yet.
So visually, we'll still not see anything. 
This triggers right before this app really is mounted. So right before we see something on the screen.
Better Place for http request.
}

3.BeforeMount(){
  This runs before component mount on screen
}

4.mounted(){
At this point of time this Vue app was mounted to the screen. It was initialized internally, all the data was processed, the template was compiled and it's showing its output on the screen.
}

Data Changes also triggers Some LifeCycle Methods:
beofreUpdate(){
  The difference will be that in beforeUpdate, we'll not see the changes on the screen yet.
}
updated(){
  In Updated Method we will see changes on screen
}

beforeDestroy() {
   console.log('at which point of time we still see the app. - 5');
},
destroyed() {
  console.log('Completely removed');
},

Vue - 3 Alternative fro beforeDestroy & destroyed.
beforeUnmount(){

}

unmounted(){}

*/
