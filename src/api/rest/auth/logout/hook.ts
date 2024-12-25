import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "./handler";
import { TOKEN_KEY } from "@/constants/localStorage";
import { useRouter } from "next/navigation";
import { USER_QUERY_KEY } from "@/api/rest/users/me/constants";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      localStorage.removeItem(TOKEN_KEY);
      queryClient.removeQueries({ queryKey: [USER_QUERY_KEY] });
      router.replace("/");
    },
  });
};
