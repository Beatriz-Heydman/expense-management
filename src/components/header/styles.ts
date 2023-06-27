//Libs
import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 130px;
  width: 100%;
  background-color: #121214;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;

  .icon_money_header {
    color: #015f43;
    font-size: 3rem;
  }

  .header_content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1rem 1rem;
    gap: 0.5rem;

    .header_content {
      width: 100%;
    }
  }
`;
