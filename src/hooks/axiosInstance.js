import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://server-2vba.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
