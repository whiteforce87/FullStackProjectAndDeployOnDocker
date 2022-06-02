<template>
  <div class="container">
    <div class="row">  
      <div class="container"> 
          <h1>Update List</h1>
        </div> 
      </div>
     <table class="table table-striped table-dark">
       <thead>      
       <tr>
         <td>User Id</td>
         <td>UserName</td>
         <td>Password</td>
         <td></td>
       </tr>
       </thead>
       <tbody>
         <tr>
           <td>{{user.id}}</td>
           <td>{{user.password}}</td>
           <td>{{user.username}}</td>
         </tr>
       </tbody>
     </table>
     <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="float-container">
              <div class="float-child" id="form">
                  <div class="col-md-12">
                      <form class="row g-3" id="inputinfos">
                          <div class="col-md-5">
                          <label for="username" class="form-label">New Username</label>
                          <input type="username" class="form-control" id="username" v-model="username" />
                          </div>
                          <div class="col-md-5">
                          <label for="password" class="form-label">New Password</label>
                          <input type="newPpassword" class="form-control" id="newPassword" v-model="password"/>
                          </div>
                          <div class="col-md-1"><br>
                          <button type="submit" class="btn btn-primary" @click.prevent.stop="updateRecord(user.id)">Save</button>
                        </div>
                      </form><br></br>
                  </div>
                </div>
             </div>
          </div>
        </div> 
      </div>
    </div>
</template>


<script>
import services from "../services";

export default {
  name: "Update",
  data(){
    return{
     user: [],
     username:'',
     password:'',
    }
  },
  methods:{
     getUsers(){
      services.getUsers().then((response) =>{
        this.users = response.data;
      });
    },
  
 updateRecord(id){
      const axios = require("axios");
      axios.put('http://localhost:9090/update/'+id+'/'+this.password+'/'+this.username)
      .then(function (response) {
         this.id = '';
         this.username='';
         this.password = '';
        })
        alert('Updated. Thank You!');
       this.$router.push({path: "/"}); 
      window.location.reload();


      
  }},

  created(){
    const userId = this.$route.params.id
    const axios = require("axios");
      axios.get('http://localhost:9090/id/'+userId)
    .then((response) =>{
        this.user = response.data;
        })
    }}


</script>


<style scoped>

h1{
  align-content: center;
  color: cornflowerblue;
}
 
h3 {
  color: white;
  font-size: 15px;
  
}

.col-md-4 {
  text-align: left;
  
}
.col-md-6 {
  width: 100%;
}

table{
  color: white;
}

.updatebtn,.deletebtn{
  margin-left: 10%;
  
 
}

</style>
