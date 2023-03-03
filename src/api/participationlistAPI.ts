import axios from "axios"

export const PartListAPI = () => {
    return axios.get('https://new-backend.unistory.app/api/data?page=0&perPage=20');
}

export const PartOneAPI = (id:string) => {
    return axios.get('https://new-backend.unistory.app/api/data/id/'+id);
}