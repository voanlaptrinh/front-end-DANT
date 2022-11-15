import { isAuthenticate } from "./auth";
import { instance } from "./instance"
const data = isAuthenticate();


export const getProfileByToken = () => {
   return instance.get(`seeker/index`, {
      headers: {
         Authorization: `Bearer ${data.token}`
      }
   })
}

export const updateProfileById = (id: number | undefined, data: any) => {
   return instance.post(`seeker/update/${id}`, data, {
      headers: {
         Authorization: `Bearer ${data.token}`
      }
   });
}
export const updateProfileemp = (id: number | undefined, data: any) => {
   return instance.put(`/employer/profile/update/${id}`, data, {      
      headers: {
         Authorization: `Bearer ${data.token}`
      }
   });
}

