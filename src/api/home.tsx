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