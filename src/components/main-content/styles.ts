//Libs
import styled from "styled-components";

export const StyledMainContent = styled.main`
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .balance_cards_container {
    display: flex;
    gap: 1.75rem;
    overflow-x: auto;
    overflow: auto;
    scroll-snap-type: both mandatory;
    overscroll-behavior-x: contain;
    padding: 1rem;
  }

  .search_container {
    padding-inline: 1rem;
  }

  .search_content {
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    .search_content {
      flex-direction: column;
    }
  }
`;
