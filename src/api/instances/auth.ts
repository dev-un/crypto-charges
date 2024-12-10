import axios from "axios";
import { TOKEN_KEY } from "@/constants/localStorage";
import { BASE_URL } from "@/api/constants";
import { LOGIN_PATH } from "@/api/rest/auth/login/constants";
import { refresh } from "@/api/rest/auth/refresh/handler";

const createAuthApiClient = () => {
  const instance = axios.create({ baseURL: BASE_URL });

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
      const needToRefresh =
        error.response?.status === 401 &&
        !config?.sent &&
        !config?.url?.includes(LOGIN_PATH);

      if (needToRefresh) {
        try {
          config.sent = true;
          const data = await refresh();
          localStorage.setItem(TOKEN_KEY, data.accessToken);
          return instance({ ...config, params: { ...error.config.params } });
        } catch (e) {
          localStorage.removeItem(TOKEN_KEY);
          window.location.href = "/login";
        }
      }

      throw error;
    },
  );

  return instance;
};

export const authApiClient = createAuthApiClient();
