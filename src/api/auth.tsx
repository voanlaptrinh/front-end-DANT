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
export const pick = (data: any) => {
   const url = `/user/forgotpassword`
   return instance.post(url, data)
}
