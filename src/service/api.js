import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: "https://api-bibliotecavirtual.vercel.app/",
});

api.interceptors.request.use(async (config) => {
    const accessToken = getToken();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export default api;