//Libs
import styled from "styled-components";

export const StyledTransactionCard = styled.div`
  width: 95%;
  background-color: #2d2d32;
  padding: 1rem;
  display: flex;

  border-radius: 0.5rem;
  gap: 8rem;

  .transaction_value_info_content {
    width: 60%;
  }

  .transaction_date_info_content {
    width: 40%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;

    .transaction_value_info_content {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }

    .transaction_date_info_content {
      width: 100%;
    }
  }
`;

export const TrashButton = styled.button`
  width: 5%;
  background: none;
  border: none;
  transition: all ease 0.2s;
  cursor: pointer;
  color: #fff;

  &:hover {
    scale: 1.2;
    color: red;
  }
`;
