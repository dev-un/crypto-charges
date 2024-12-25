"use client";

import React from "react";
import { useTransactions } from "@/api/rest/transactions/get/hook";
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Spinner } from "@nextui-org/spinner";
import { columns } from "./constants";

const TransactionsTable = () => {
  const { data, isPending, error } = useTransactions({ limit: 10, offset: 0 });

  if (isPending) return <Spinner />;

  return (
    <Table aria-label="Transactions table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data?.list || []}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
