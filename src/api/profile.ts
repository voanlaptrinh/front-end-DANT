import { isAuthenticate } from "./auth";
import { instance } from "./instance"
const data = isAuthenticate();


export const getProfileByToken = (token: string | undefined) => {
   return instance.get(`seeker/index/${token}`, {
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
   return instance.post(`/employer/profile/update/${id}`, data, {
      headers: {
         Authorization: `Bearer ${data.token}`
      }
   });
}

export const listprofileAdmin = () => {
   const url = `/employer/profile/${data.token}`;
   return instance.get(url);
};