import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
   baseURL: 'http://localhost:8000/api',
   headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
   }
})
