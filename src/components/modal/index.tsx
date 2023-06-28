//Libs
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

//Styles
import { Overlay } from "./styles";

//Components
import { Button } from "../button";
import { Flex } from "../flex";
import { Input } from "../input";
import { Typography } from "../typography";

//Types
import { ModalProps } from "./types";

export function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay
      className="overlay"
      onClick={(event) => {
        const target = event.target as HTMLDivElement;

        if (target.classList.contains("overlay")) {
          onClose();
        }
      }}
    >
      <div className="modal_container">
        <button className="close_icon" onClick={onClose}>
          <VscChromeClose color="#fff" fontSize="1.5rem" />
        </button>
        <Typography fontWeight="700" fontSize="1.5rem">
          Nova transação
        </Typography>
        <Flex direction="column" gap="1rem" style={{ width: "100%" }}>
          <Input type="text" placeholder="Descrição" />
          <Input type="text" placeholder="Preço" />
          <Input type="text" placeholder="Categoria" />
        </Flex>
        <Flex gap="1rem" style={{ width: "100%" }}>
          <Flex gap="1rem" style={{ width: "100%" }}>
            <Button className="button_modal_content" backgroundColor="#29292E">
              <BsArrowUpCircle color="#0f0" fontSize="1.2rem" />
              <Typography>Entrada</Typography>
            </Button>
          </Flex>

          <Button className="button_modal_content" backgroundColor="#29292E">
            <BsArrowDownCircle color="#f00" fontSize="1.2rem" />
            <Typography>Saída</Typography>
          </Button>
        </Flex>
        <Button>Cadastrar</Button>
      </div>
    </Overlay>
  );
}
