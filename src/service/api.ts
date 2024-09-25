import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:8080/sjapi/",
    timeout: 8000
})