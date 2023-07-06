//Libs
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useContext, useEffect } from "react";

//Styles
import { StyledMainContent } from "./styles";

//Components
import { BalanceCard } from "../balance-card";
import { Input } from "../input";
import { Flex } from "../flex";
import { Button } from "../button";
import { TransactionCard } from "../transaction-card";

//Services
import { api } from "../../services/api";

//Shared
import { formatCurrency } from "../../shared/formatters/format-currency";
import { TransactionsContext } from "../../contexts/transactions-context";

export function MainContent() {
  const { transactions, setTransactions } = useContext(TransactionsContext);

  function getTotalTransactionValue() {
    let totalValue = 0;

    let totalEntry = 0;
    let totalOutflow = 0;

    for (let i = 0; i < transactions.length; i = i + 1) {
      totalValue += Number(transactions[i].transaction_value);

      if (transactions[i].transaction_type === "entry") {
        totalEntry += Number(transactions[i].transaction_value);
      }
      if (transactions[i].transaction_type === "outflow") {
        totalOutflow += Number(transactions[i].transaction_value);
      }
    }

    return {
      totalValue,
      totalEntry,
      totalOutflow,
    };
  }

  const transactionValue = getTotalTransactionValue();

  const totalEntryInReal = formatCurrency(transactionValue.totalEntry);
  const totalOutFlowInReal = formatCurrency(transactionValue.totalOutflow);
  const totalInReal = formatCurrency(transactionValue.totalValue);

  async function getMainContent() {
    try {
      const response = await api.get("/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMainContent();
  }, []);

  return (
    <StyledMainContent>
      <div className="balance_cards_container">
        <BalanceCard
          title="Entradas"
          balanceValue={totalEntryInReal}
          icon={<BsArrowUpCircle color="#0f0" fontSize="1.5rem" />}
        />
        <BalanceCard
          title="Saídas"
          balanceValue={totalOutFlowInReal}
          icon={<BsArrowDownCircle color="#f00" fontSize="1.5rem" />}
        />
        <BalanceCard
          title="Total"
          balanceValue={totalInReal}
          backgroundColor="#015F43"
          icon={<AiOutlineDollarCircle color="#fff" fontSize="2rem" />}
        />
      </div>

      <Flex className="search_container" gap="1rem">
        <Input placeholder="Busque uma transação" />

        <Button
          className="search_button"
          color="#015F43"
          backgroundColor="transparent"
          border="solid 2px #015F43"
          width="fit-content"
        >
          Buscar
        </Button>
      </Flex>

      <Flex direction="column" gap="0.5rem" style={{ paddingInline: "1rem" }}>
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))}
      </Flex>
    </StyledMainContent>
  );
}
