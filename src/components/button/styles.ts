//Libs
import { styled } from "styled-components";

//Types
import { ButtonStyledProps } from "./types";

export const StyledButton = styled.button<ButtonStyledProps>`
  width: ${({ width = "100%" }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor = "#00875f" }) => backgroundColor};
  border: ${({ border = "none" }) => border};
  color: ${({ color = "#ffffff" }) => color};
  font-weight: 600;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: #00c187;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
