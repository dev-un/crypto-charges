import axios from "axios";
import { addTokenToHeadersInterceptor } from "@/api/interceptors/request/tokenToHeaders";
import { refreshTokenInterceptor } from "@/api/interceptors/response/refreshToken";
import { errorInterceptor } from "@/api/interceptors/response/errorInterceptor";

const createAuthApiClient = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  });

  // interceptors
  addTokenToHeadersInterceptor(instance);
  refreshTokenInterceptor(instance);
  errorInterceptor(instance);

  return instance;
};

export const authApiClient = createAuthApiClient();
