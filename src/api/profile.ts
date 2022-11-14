import { instance } from "./instance"

export const getProfileByToken = (token: string | undefined) => {
   return instance.get(`seeker/index/${token}`)
}

