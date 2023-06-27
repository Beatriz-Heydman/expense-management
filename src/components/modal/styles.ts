//Libs
import { styled } from "styled-components";

export const StyledModal = styled.div`
  background-color: #00000040;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .modal_container {
    width: min(520px, 100%);
    min-height: 500px;
    background-color: #202024;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    padding-inline: 2rem;

    .close_icon {
      background: none;
      border: none;
      margin-left: auto;
      cursor: pointer;
    }
  }

  .button_modal_content {
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 500px) {
    justify-content: flex-end;

    .modal_container {
      border-radius: 1rem 1rem 0 0;
    }
  }
`;
