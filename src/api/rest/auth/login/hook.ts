import { useMutation } from "@tanstack/react-query";
import { login } from "./handler";
import { LoginResponse } from "./types";
import { TOKEN_KEY } from "@/constants/localStorage";

export const useLogin = () => {
  return useMutation<LoginResponse, any, any>({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem(TOKEN_KEY, data.accessToken);
    },
  });

  // TODO: refetch /me + add getMe to main layout
};
