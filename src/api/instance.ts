import axios from "axios";

export const instance = axios.create({
   baseURL: 'http://itwork19.herokuapp.com/api/user',
   headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
   }
})