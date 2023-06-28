//Libs
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { useState } from "react";

//Components
import { Button } from "../button";
import { Typography } from "../typography";
import { Modal } from "../modal";

//Styles
import { StyledHeader } from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <div className="header_content">
        <RiMoneyEuroCircleFill className="icon_money_header" />
        <Typography fontWeight="600" fontSize="1.5rem">
          DT Money
        </Typography>
      </div>
      <Button
        width="fit-content"
        style={{
          whiteSpace: "nowrap",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Nova transação
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </StyledHeader>
  );
}
