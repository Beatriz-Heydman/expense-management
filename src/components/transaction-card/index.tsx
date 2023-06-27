//Styles
import { StyledTransactionCard } from "./styles";

//Components
import { Typography } from "../typography";
import { Flex } from "../flex";

//Types
import { TransactionCardProps } from "./types";

export function TransactionCard({
  category,
  description,
  price,
}: TransactionCardProps) {
  return (
    <StyledTransactionCard>
      <Flex
        className="transaction_value_info_content"
        justifyContent="space-between"
        gap="1rem"
      >
        <Typography fontWeight="400">{description}</Typography>
        <Typography fontWeight="400" color="#0f0">
          {price}
        </Typography>
      </Flex>
      <Flex
        className="transaction_date_info_content"
        justifyContent="space-between"
      >
        <Typography fontWeight="400">{category}</Typography>
        <Typography fontWeight="400">13/04/2022</Typography>
      </Flex>
    </StyledTransactionCard>
  );
}
