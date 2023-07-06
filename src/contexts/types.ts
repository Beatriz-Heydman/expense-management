import { Dispatch, ReactNode, SetStateAction } from "react";
import { Transaction } from "../components/main-content/types";

export type TransactionsProviderProps = {
  children: ReactNode;
};

export type TransactionsContextValues = {
  transactions: Transaction[];
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
};
