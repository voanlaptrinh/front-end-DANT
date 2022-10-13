import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
   baseURL: 'http://datnweb19.herokuapp.com/api', // t co dung vao may cai nay lam j oke oke để t
   headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
   }
})
