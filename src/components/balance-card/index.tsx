//Styles
import { StyledBalanceCard } from "./styles";

//Components
import { Flex } from "../flex";
import { Typography } from "../typography";

//Types
import { BalanceCardProps } from "./types";

export function BalanceCard({
  balanceValue,
  icon,
  title,
  backgroundColor,
}: BalanceCardProps) {
  return (
    <StyledBalanceCard backgroundColor={backgroundColor}>
      <Flex justifyContent="space-between">
        <Typography>{title}</Typography>
        {icon}
      </Flex>
      <Typography fontSize="2rem" fontWeight="600">
        {balanceValue}
      </Typography>
    </StyledBalanceCard>
  );
}
