import { useSuspenseQuery } from "@tanstack/react-query";
import { getTransactions } from "../apis/transaction.api";
import type { Transaction } from "../types/transaction.types";

export const useTransactions = () => {
  return useSuspenseQuery<Transaction[], Error>({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });
};
