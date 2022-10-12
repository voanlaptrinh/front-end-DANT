import { toast } from "react-toastify"
import { User } from "../types/user"
import { instance } from "./instance"

export const signup = (data: any) => {
   const url = `/user/register`
   return instance.post(url, data)
}

export const signin = (data: User) => {
   const url = `/user/login`
   return instance.post(url, data)
}

export const logout = () => {
   localStorage.removeItem('user');
   toast.success('Đăng xuất thành công')
}

export const isAuthenticate = () => {
   if (typeof window == "undefined") return false;
   if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') as string).data;
   } else {
      return false
   }
}

export const pick = (data: any) => {
   const url = `/user/forgotpassword`
   return instance.post(url, data)
}
