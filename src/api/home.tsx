import { instance } from "./instance"

export const listCandidate = () => {
    const url = `/index/list`
    return instance.get(url)
}