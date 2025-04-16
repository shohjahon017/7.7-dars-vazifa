// src/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // API manzilini to'g'ri kiriting
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API xatolik:", error);
    return Promise.reject(error);
  }
);

export default api;
