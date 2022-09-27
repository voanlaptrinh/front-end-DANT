import { instance } from "./instance"

export const signup = (data: any) => {
   const url = `/user/register`
   return instance.post(url, data)
}

export const signin = (data: any) => {
   const url = `/user/login`
   return instance.post(url,data)
}
