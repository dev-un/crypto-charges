export interface Transaction {
  id: string;
  name: string;
  date: string;
  description?: string;
  amount: string;
  createdAt: string;
}

export interface GetTransactionsResponse {
  amount: number;
  list: Transaction[];
}
