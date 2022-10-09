import { instance } from "./instance"

export const listCandidate = () => {
    const url = `/index/list`
    return instance.get(url)
}
export const addNews = (data:any) =>{
    const url =`/employer/store`
    return instance.post(url,data)
}