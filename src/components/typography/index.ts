//Libs
import { styled } from "styled-components";

//Types
import { TypographyProps } from "./types";

export const Typography = styled.span<TypographyProps>`
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  font-weight: ${({ fontWeight = "400" }) => fontWeight};
  color: ${({ color = "#fff" }) => color};
  font-family: ${({ fontFamily = "Roboto Flex" }) => fontFamily};
`;
