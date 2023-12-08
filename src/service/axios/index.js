import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "/api/",
  headers: { "Content-type": "application/json" },
  timeout: 15 * 1000,
  validateStatus: (status) => status === 200,
});

export { axiosInstance };
