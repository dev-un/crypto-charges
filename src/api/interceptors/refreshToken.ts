import { AxiosInstance, HttpStatusCode } from "axios";
import { LOGIN_PATH } from "@/api/rest/auth/login/constants";
import { refreshTokens } from "@/api/rest/auth/refresh/handler";
import { TOKEN_KEY } from "@/constants/localStorage";

export function refreshTokenInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;
      const needToRefresh =
        error.response?.status === HttpStatusCode.Unauthorized &&
        !config?.sent &&
        !config?.url?.includes(LOGIN_PATH);

      if (needToRefresh) {
        try {
          config.sent = true;
          const data = await refreshTokens();
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
}
