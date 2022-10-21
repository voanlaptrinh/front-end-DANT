import { isAuthenticate } from "./auth";
import { instance } from "./instance"
const { token } = isAuthenticate();

export const listCandidate = () => {
    const url = `/index/list`
    return instance.get(url)
}
export const addNews = (data: any) => {
    const url = `/employer/store`
    return instance.post(url, data)
}
export const showNews = () =>{
    const url = `/employer/show/${token}`
    return instance.get(url)
}
export const removeShowNews = (id:any) =>{
    const url = `/employer/delete/${id}`
    return instance.delete(url)
}
export const listNews = () => {
    const url = `/employer/create/${token}` 
    return instance.get(url)
}
export const createNews = (data: any) => {
    const url = `/employer/store`
    return instance.post(url, data)
}
export const listNewsemp = () => {
    const url = `/employer/index/${token}`
    return instance.get(url)
}