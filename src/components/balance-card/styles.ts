//Libs
import styled from "styled-components";

//Types
import { StyledBalanceCardProps } from "./types";

export const StyledBalanceCard = styled.div<StyledBalanceCardProps>`
  background-color: ${({ backgroundColor = "#323238" }) => backgroundColor};
  min-width: 355px;
  height: 140px;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #fff;
  scroll-snap-stop: normal;
  scroll-snap-align: center;

  @media (max-width: 450px) {
    min-width: 90vw;
  }
`;
