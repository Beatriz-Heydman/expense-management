//Libs
import { styled } from "styled-components";

export const StyledTransactionCard = styled.div`
  width: 100%;
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
