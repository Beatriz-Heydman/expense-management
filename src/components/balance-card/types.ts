//Libs
import { ReactNode } from "react";

export type StyledBalanceCardProps = {
  backgroundColor?: string;
};

export type BalanceCardProps = StyledBalanceCardProps & {
  title: string;
  balanceValue: string | number;
  icon: ReactNode;
};
