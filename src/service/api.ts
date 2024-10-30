import axios from "axios"

export const api = axios.create({
    baseURL: "https://skilljourneyback.onrender.com/sjapi/",
    timeout: 8000
})