import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: response interceptor (prod-ready)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized – redirect to login if needed");
    }
    return Promise.reject(error);
  }
);

export default api;
