import { USER_QUERY_KEY } from "@/api/rest/users/me/constants";
import { TOKEN_KEY } from "@/constants/localStorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { vkRegister } from "./handler";

export const useVkRegister = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: vkRegister,
    onSuccess: async (data) => {
      localStorage.setItem(TOKEN_KEY, data.accessToken);
      await queryClient.fetchQuery({ queryKey: [USER_QUERY_KEY] });
      router.replace("/");
    },
  });
};
