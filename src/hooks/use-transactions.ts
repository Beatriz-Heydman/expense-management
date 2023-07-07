//Libs
import { useContext } from "react";

//Contexts
import { TransactionsContext } from "../contexts/transactions-context/transactions-context";

export function useTransactions() {
  const contextValues = useContext(TransactionsContext);

  return contextValues;
}
