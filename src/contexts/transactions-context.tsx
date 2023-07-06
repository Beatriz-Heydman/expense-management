import { createContext, useState } from "react";
import { TransactionsContextValues, TransactionsProviderProps } from "./types";
import { Transaction } from "../components/main-content/types";

export const TransactionsContext = createContext(
  {} as TransactionsContextValues
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <TransactionsContext.Provider value={{ setTransactions, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
