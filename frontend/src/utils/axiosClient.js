import axios from "axios";

const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://codearena-1-0r7a.onrender.com";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;