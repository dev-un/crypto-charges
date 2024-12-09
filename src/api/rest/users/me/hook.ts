import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { USER_QUERY_KEY } from "./constants";
import { getMe } from "./handler";
import { User } from "./types";
import { TOKEN_KEY } from "@/constants/localStorage";

export const useUser = ({
  enabled = true,
  onErrorRedirectTo,
}: { enabled?: boolean; onErrorRedirectTo?: string } = {}) => {
  const router = useRouter();

  const hook = useQuery<User>({
    queryKey: [USER_QUERY_KEY],
    queryFn: getMe,
    enabled:
      typeof window !== "undefined" &&
      !!localStorage.getItem(TOKEN_KEY) &&
      enabled,
  });

  useEffect(() => {
    if (
      hook.isLoading ||
      hook.data ||
      !router ||
      // router.pathname === "/login" ||
      !onErrorRedirectTo
    ) {
      return;
    }

    router.replace(onErrorRedirectTo);
  }, [hook.isLoading, hook.data, router, onErrorRedirectTo]);

  return hook;
};
