import axios from 'axios';

const Auth = {
  postLogin( email, password ){
    return axios.post('http://localhost:3000/login', { auth: {email, password} });
  }
};

export default Auth;
