//Libs
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";

//Styles
import { StyledMainContent } from "./styles";

//Components
import { BalanceCard } from "../balance-card";
import { Input } from "../input";
import { Flex } from "../flex";
import { Button } from "../button";
import { TransactionCard } from "../transaction-card";

export function MainContent() {
  return (
    <StyledMainContent>
      <div className="balance_cards_container">
        <BalanceCard
          title="Entradas"
          balanceValue="R$ 17.000,00"
          icon={<BsArrowUpCircle color="#0f0" fontSize="1.5rem" />}
        />
        <BalanceCard
          title="Saídas"
          balanceValue="R$ 1.259,00"
          icon={<BsArrowDownCircle color="#f00" fontSize="1.5rem" />}
        />
        <BalanceCard
          title="Total"
          balanceValue="R$ 17.000,00"
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
        <TransactionCard
          category="Venda"
          description="Desenvolvimento de site"
          price="R$ 20.000,00"
        />
      </Flex>
    </StyledMainContent>
  );
}
