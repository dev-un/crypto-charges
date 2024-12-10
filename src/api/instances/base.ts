import axios from "axios";
export const baseApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});
