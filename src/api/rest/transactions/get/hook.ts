import { useQuery } from "@tanstack/react-query";
import { getAllTransactions } from "./handler";
import { GetTransactionsResponse } from "./types";
import { TRANSACTIONS_QUERY_KEY } from "@/api/rest/transactions/constants";
import { useUser } from "@/api/rest/users/me/hook";

export const useTransactions = ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  const { isSuccess } = useUser();
  return useQuery<GetTransactionsResponse>({
    queryKey: [TRANSACTIONS_QUERY_KEY, limit, offset],
    queryFn: ({ signal }) => getAllTransactions({ signal, limit, offset }),
    enabled: isSuccess,
  });
};
