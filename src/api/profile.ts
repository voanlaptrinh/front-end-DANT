import { isAuthenticate } from "./auth";
import { instance } from "./instance"
const tokenAuth = isAuthenticate();



export const getProfileByToken = (token: string | undefined) => {
   return instance.get(`seeker/index/${token}`, {
      headers: {
         Authorization: `Bearer ${tokenAuth.token}`
      }
   })
}

export const updateProfileById = (id: number | undefined, data: any) => {
   return instance.post(`seeker/update/${id}`, data, {
      headers: {
         Authorization: `Bearer ${tokenAuth.token}`
      }
   });
}

export const updateProfileemp = (id: number | undefined, data: any) => {
   return instance.put(`/employer/profile/update/${tokenAuth.token}`, data, {
      headers: {
         Authorization: `Bearer ${tokenAuth.token}`
      }
   });
}
export const updateProfilecom = (id: number | undefined, data: any) => {
   return instance.put(`/employer/profile/company/update/${id}`, data, {
      headers: {
         Authorization: `Bearer ${tokenAuth.token}`
      }
   });
}

export const listprofileAdmin = () => {
   return instance.get(`/employer/profile`, {
      headers: {
         Authorization: `Bearer ${tokenAuth.token}`
      }
   });
};

export const listprofileAdmincom = () => {
   return instance.get(`/employer/profile/company`, {
      headers: {
         Authorization: `Bearer ${tokenAuth.token}`
      }
   });
};

