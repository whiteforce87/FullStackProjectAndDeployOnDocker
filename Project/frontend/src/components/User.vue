<template>
  <div class="container">
    <div class="row">  
      <div class="container"> 
          <h1>User List</h1>
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
         <tr v-for = "user in users" v-bind:key = "user.id">
           <td>{{user.id}}</td>
           <td>{{user.password}}</td>
           <td>{{user.username}}</td>
           <span class="deletebtn">
          <button type="submit" class="btn btn-primary" @click.prevent.stop="deleteRecord(user.id)">Delete</button>
          </span>
          <span class="updatebtn">
          <button type="submit" class="btn btn-primary" @click="$router.push('/update/' + user.id)">Update</button>
        </span>
         </tr>
       </tbody>
     </table>
    </div>
</template>

<script>
import services from "../services";

export default {
  name: "User",
  data(){
    return{
    users: [],
    id: ''
    }
  },
  methods:{
    getUsers(){
      services.getUsers().then((response) =>{
        this.users = response.data;
      });
    },

  deleteRecord(id){
      const axios = require("axios");
      axios.post(`http://localhost:9090/delete/${id}`)
      .then(function (response) {
         this.id = '';
       alert(response.data);
        })
        alert('Deleted. Thank You!');
        this.$router.go();
      
   } },

  created(){
    this.getUsers();
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
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
