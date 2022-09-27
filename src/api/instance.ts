import axios from "axios";

export const instance = axios.create({
   baseURL: 'http://datnweb19.herokuapp.com/api',
   headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
   }
})