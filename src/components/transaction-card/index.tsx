//Styles
import { StyledTransactionCard } from "./styles";

//Components
import { Typography } from "../typography";
import { Flex } from "../flex";

//Types
import { TransactionCardProps } from "./types";
import { format } from "date-fns";
import { formatCurrency } from "../../shared/formatters/format-currency";

export function TransactionCard({ transaction }: TransactionCardProps) {
  const valueNum = Number(transaction.transaction_value);

  const isNegative = transaction.transaction_type === "outflow";

  const valueInReal = formatCurrency(valueNum);

  return (
    <StyledTransactionCard>
      <Flex
        className="transaction_value_info_content"
        justifyContent="space-between"
        gap="1rem"
      >
        <Typography fontWeight="400">{transaction.transaction}</Typography>
        <Typography fontWeight="400" color={isNegative ? "#f00" : "#0f0"}>
          {isNegative && "-"} {valueInReal}
        </Typography>
      </Flex>
      <Flex
        className="transaction_date_info_content"
        justifyContent="space-between"
      >
        <Typography fontWeight="400">
          {transaction.transaction_category}
        </Typography>
        <Typography fontWeight="400">
          {format(transaction.transaction_date, "dd/MM/yyyy")}
        </Typography>
      </Flex>
    </StyledTransactionCard>
  );
}
