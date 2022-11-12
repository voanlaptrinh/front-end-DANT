import { instance } from "./instance"

export const getProfileByToken = (token: string | undefined) => {
   return instance.get(`seeker/index/${token}`)
}

export const updateProfileById = (data: any) => {
   return instance.post(`seeker/update/${data.id}`, data);
}