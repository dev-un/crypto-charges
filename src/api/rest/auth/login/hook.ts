import { useMutation } from "@tanstack/react-query";
import { login } from "./handler";

export const useLogin = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: login,
    onSuccess: onSuccess,
  });
};
