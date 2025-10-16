import axios from "axios";  // import axios from node_modules

const api = axios.create({
  baseURL: "http://localhost:8080", // your Spring Boot URL
});

// Add token from localStorage to every request
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
