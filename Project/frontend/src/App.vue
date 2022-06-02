<template>
  <div id="app">
    <div class="nav">
      <Header></Header>
    </div>
    <div class="container">
      <img alt="DB logo" src="./assets/db_Image.png" id="avatar" />
    </div>
    <div class="list">
      <User></User>
    </div><br>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import User from './components/User.vue';
import Footer from "./components/Footer.vue";

export default {
   name: 'App',
   components: {
    Header,
    User,
    Footer
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1%;
}


div.footer{
  margin-top: 10%;
}
</style>
