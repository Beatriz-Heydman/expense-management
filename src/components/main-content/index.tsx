//Libs
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

//Styles
import { StyledMainContent } from "./styles";

//Components
import { BalanceCard } from "../balance-card";
import { Input } from "../input";
import { Flex } from "../flex";
import { Button } from "../button";
import { TransactionCard } from "../transaction-card";
import { Typography } from "../typography";

//Services
import { api } from "../../services/api";

//Shared
import { formatCurrency } from "../../shared/formatters/format-currency";

//Hooks
import { useTransactions } from "../../hooks/use-transactions";

export function MainContent() {
  const { transactions, setTransactions } = useTransactions();

  const [isFiltering, setIsFiltering] = useState(false);

  const [searchTransaction, setSearchTransaction] = useState("");

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

  async function getTransactions() {
    try {
      const response = await api.get("/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function searchTransactionByName(transactionName: string) {
    try {
      const response = await api.get("/transactions", {
        params: {
          transaction_like: transactionName,
        },
      });

      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTransactions();
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

      <Flex direction="column" gap="1rem" className="search_container">
        <Flex style={{ width: "100%" }} gap="1rem">
          <Input
            placeholder="Busque uma transação"
            value={searchTransaction}
            onChange={(event) => {
              setSearchTransaction(event.currentTarget.value);
            }}
          />

          <Button
            className="search_button"
            color="#015F43"
            backgroundColor="transparent"
            border="solid 2px #015F43"
            width="fit-content"
            onClick={() => {
              setIsFiltering(true);

              searchTransactionByName(searchTransaction);
            }}
          >
            Buscar
          </Button>
        </Flex>
        {isFiltering && (
          <Button
            onClick={() => {
              setSearchTransaction("");
              getTransactions();
              setIsFiltering(false);
            }}
            width="fit-content"
            style={{ marginRight: "auto" }}
          >
            Limpar filtros
          </Button>
        )}
      </Flex>

      <Flex direction="column" gap="0.5rem" style={{ paddingInline: "1rem" }}>
        {transactions.length >= 1 ? (
          transactions.map((transaction, index) => (
            <TransactionCard key={index} transaction={transaction} />
          ))
        ) : (
          <Typography>Não há resultados para a busca</Typography>
        )}
      </Flex>
    </StyledMainContent>
  );
}
