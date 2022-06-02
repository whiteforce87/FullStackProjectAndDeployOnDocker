import axios from 'axios'

const USERDATA = 'http://localhost:9090/users'

class userService{
  getUsers(){
    return axios.get(USERDATA);
  }
}

export default new userService();