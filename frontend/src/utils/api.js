import axios from "axios";

const isProd = import.meta.env.MODE === "production";

const api = axios.create({
  baseURL: isProd
    ? "/api"
    : import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export default api;
