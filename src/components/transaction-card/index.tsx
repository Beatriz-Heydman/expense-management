//Libs
import { format } from "date-fns";
import { BsTrash } from "react-icons/bs";

//Components
import { Typography } from "../typography";
import { Flex } from "../flex";

//Styles
import { StyledTransactionCard, TrashButton } from "./styles";

//Types
import { TransactionCardProps } from "./types";

//Services
import { api } from "../../services/api";

//Shared
import { formatCurrency } from "../../shared/formatters/format-currency";

//Hooks
import { useTransactions } from "../../hooks/use-transactions";

export function TransactionCard({ transaction }: TransactionCardProps) {
  const { setTransactions, transactions } = useTransactions();

  async function deleteTransaction() {
    try {
      await api.delete(`/transactions/${transaction.id}`);

      const newTransactions = transactions.filter((item) => {
        return item.id !== transaction.id;
      });

      setTransactions(newTransactions);
    } catch (error) {
      console.error(error);
    }
  }

  const valueNum = Number(transaction.transaction_value);

  const isNegative = transaction.transaction_type === "outflow";

  const valueInReal = formatCurrency(valueNum);

  return (
    <Flex style={{ width: "100%" }} gap="1rem">
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
      <TrashButton onClick={deleteTransaction}>
        <BsTrash />
      </TrashButton>
    </Flex>
  );
}
