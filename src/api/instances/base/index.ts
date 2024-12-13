import axios from "axios";
import { errorInterceptor } from "@/api/interceptors/response/errorInterceptor";

const createBaseApiClient = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  });

  // interceptors
  errorInterceptor(instance);

  return instance;
};

export const baseApiClient = createBaseApiClient();
