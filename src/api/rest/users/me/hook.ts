import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { USER_QUERY_KEY } from "./constants";
import { getMe } from "./handler";
import { User } from "./types";

export const useUser = ({
  onErrorRedirectTo,
}: { onErrorRedirectTo?: string } = {}) => {
  const router = useRouter();

  const hook = useQuery<User | null>({
    queryKey: [USER_QUERY_KEY],
    queryFn: getMe,
    retry: (failureCount, error) => {
      if (error.message === "No token") return false; // disable repeats
      return failureCount < 3;
    },
  });

  useEffect(() => {
    if (hook.isLoading || hook.data || !router || !onErrorRedirectTo) {
      return;
    }

    router.replace(onErrorRedirectTo);
  }, [hook.isLoading, hook.data, router, onErrorRedirectTo]);

  return hook;
};
