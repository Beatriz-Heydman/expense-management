//Libs
import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: #121214;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  outline: none;

  &[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`;
