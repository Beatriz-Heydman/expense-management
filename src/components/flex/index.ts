//Libs
import styled from "styled-components";

//Types
import { FlexProps } from "./types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${({ gap = "0" }) => gap};
  flex-direction: ${({ direction = "row" }) => direction};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  align-items: ${({ alignItems = "center" }) => alignItems};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
`;
