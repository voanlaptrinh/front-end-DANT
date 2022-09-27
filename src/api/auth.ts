import { instance } from "./instance"

export const signup = (data: any) => {
   const url = `/register`
   return instance.post(url, data)
}

export const getData = () => {
   const url = `/test`
   return instance.get(url)
}
