import { authApiClient } from "@/api/instances/auth";
import { GET_TRANSACTIONS_PATH } from "@/api/rest/transactions/constants";
import { GetTransactionsResponse } from "@/api/rest/transactions/get/types";

export async function getAllTransactions({
  signal,
  limit,
  offset,
}: {
  signal: AbortSignal;
  limit: number;
  offset: number;
}) {
  const res = await authApiClient.get<GetTransactionsResponse>(
    GET_TRANSACTIONS_PATH,
    {
      params: { limit, offset },
      signal,
    },
  );

  return res.data;
}
