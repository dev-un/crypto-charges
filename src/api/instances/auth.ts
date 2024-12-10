import axios from "axios";
import { addTokenToHeadersInterceptor } from "../interceptors/tokenToHeaders";
import { refreshTokenInterceptor } from "../interceptors/refreshToken";

const createAuthApiClient = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  });

  // interceptors
  addTokenToHeadersInterceptor(instance);
  refreshTokenInterceptor(instance);

  return instance;
};

export const authApiClient = createAuthApiClient();
