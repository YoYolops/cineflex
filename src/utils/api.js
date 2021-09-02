import axios from "axios";

const API = axios.create({
    baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex"
})

export default API;