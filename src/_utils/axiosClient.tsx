import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default axiosClient;
