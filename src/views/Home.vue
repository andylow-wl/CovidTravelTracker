<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <button onclick="smoothscroll" id="toTop"><i class="fa fa-angles-up"></i></button>
  <NavBar/>
  <EnterDestination/>
  <AddDataFS/>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import EnterDestination from '@/components/EnterDestination.vue'
import AddDataFS from '@/components/AddDataFS.vue'


export default {
    name: 'App',
    components: {
        NavBar,
        EnterDestination,
        AddDataFS,
    },

    methods: {
      smoothscroll: function(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          //window.requestAnimationFrame(smoothscroll);
          window.scrollTo (0,currentScroll - (currentScroll/5));
        }
      }
    }
}
</script>

<style>
  #toTop {
  display: contents; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: red; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}

#toTop:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
</style>