export type Transaction = {
  transaction: string;
  transaction_date: number;
  transaction_type?: "entry" | "outflow";
  transaction_value: string;
  transaction_category: string;
};
