<template>
  <div id="app">
    <div class="crude page">
      <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="float-container">
              <div class="float-child" id="form">
                  <div class="col-md-12" >
                      <form class="row g-3" id="inputinfos">
                          <div class="col-md-5">
                          <label for="username" class="form-label">Username</label>
                          <input type="username" class="form-control" id="username" v-model="username" />
                          </div>
                          <div class="col-md-5">
                          <label for="password" class="form-label">Password</label>
                          <input type="newPpassword" class="form-control" id="newPassword" v-model="password" />
                          </div>
                          <div class="col-md-1"><br>
                          <button type="submit" class="btn btn-primary" @click.prevent.stop="addRecord">Add</button>
                          </div>
                      </form>
                  </div>
              </div>
             </div>
          </div>
        </div> 
      </div>
    </div>
    <div class="footer">
      
    </div>
  </div>
</template>

<script>

import User from '../components/User.vue';
import axios from 'axios';


export default {
  name: "App",
  components: {
  User,
 },

  //created() {
   data(){
    return{
    username: '',
    password: '',
    idNumber: '',
    users: [],
    }
    },
  //},

 methods: {
 
   addRecord(){
     if(this.username != '' && this.password != ''){
      const axios = require("axios");
       axios.post(`http://localhost:9090/add/${this.password}/${this.username}`)
        .then(function (response) {
         this.username = '';
         this.password = '';
         alert(response.data);
        })
        alert('Saved. Thank You!');
        this.$router.go();
        }else{
       alert('Fill All The Empty Fields.');

     }
   },
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

#avatar{
  width: 15%;
}

label{
  color: aliceblue;
}

button{
  margin-top: 10px;
}

h1{
  color: white;
}


</style>
