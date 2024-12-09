import axios from "axios";
import { TOKEN_KEY } from "@/constants/localStorage";
import { BASE_URL } from "@/api/constants";

const AuthApiClient = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  // Interceptor for attaching Authorization header
  instance.interceptors.request.use(async (request) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) throw new Error("No token");

    request.headers.set("Authorization", `Bearer ${token}`);

    return request;
  });

  // Interceptor for refreshing token
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;

      if (error.response) {
        if (
          error.response.status === 401 &&
          !config?.sent &&
          !config?.url?.includes("/auth/login")
        ) {
          config.sent = true;
          const response = await fetch(`${BASE_URL}/auth/refresh`, {
            credentials: "include",
            method: "POST",
          });
          if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem(TOKEN_KEY, data.token);
            return instance({
              ...config,
              params: { ...error.config.params },
            });
          } else {
            localStorage.removeItem(TOKEN_KEY);
          }
        }
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export const authApiClient = AuthApiClient();
