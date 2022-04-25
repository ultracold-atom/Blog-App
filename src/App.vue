<template>
  <Navbar />
  <router-view/>
</template>


<script>
import Navbar from './components/Navbar-App.vue'
export default {
    components: { Navbar }
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

body{
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  font-family: 'Yusei Magic', sans-serif;
  background-color: #dfe4ea;
}

p,h1,h2,h2{
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #333;
}
</style>
