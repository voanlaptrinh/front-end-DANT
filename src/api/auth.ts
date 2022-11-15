import { toast } from "react-toastify"
import { User } from "../types/user"
import { instance } from "./instance"

export const isAuthenticate = () => {
   if (typeof window == "undefined") return false;
   if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') as string).data;
   } else {
      return false
   }
}
const data = isAuthenticate();

export const signup = (data: any) => {
   const url = `/user/register`
   return instance.post(url, data)
}

export const profile1 = () => {
   const url = `/user/user-info/${data.token}`
   return instance.get(url)
}


export const signin = (data: User) => {
   const url = `/user/login`
   // toast.success('Đăng Nhập thành công')
   return instance.post(url, data)
}

export const logout = () => {
   localStorage.removeItem('user');
   toast.info('Đăng xuất thành công')
}



export const pick = (data: any) => {
   const url = `/user/forgotpassword`
   return instance.post(url, data)
}
