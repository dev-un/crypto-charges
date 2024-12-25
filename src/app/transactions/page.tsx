import React from "react";
import TransactionsTable from "@/components/TransactionsTable";

const TransactionsPage = () => {
  return (
    <section className={"flex justify-center h-full"}>
      <TransactionsTable />
    </section>
  );
};

export default TransactionsPage;
