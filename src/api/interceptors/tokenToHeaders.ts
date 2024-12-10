import { AxiosInstance } from "axios";
import { TOKEN_KEY } from "@/constants/localStorage";

export function addTokenToHeadersInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use(async (request) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) throw new Error("No token");
    request.headers.set("Authorization", `Bearer ${token}`);
    return request;
  });
}
