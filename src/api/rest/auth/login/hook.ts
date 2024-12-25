import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "./handler";
import { TOKEN_KEY } from "@/constants/localStorage";
import { USER_QUERY_KEY } from "@/api/rest/users/me/constants";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      localStorage.setItem(TOKEN_KEY, data.accessToken);
      await queryClient.fetchQuery({ queryKey: [USER_QUERY_KEY] });
      router.replace("/");
    },
  });
};
