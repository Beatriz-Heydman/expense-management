//Libs
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { useContext, useState } from "react";

//Styles
import { Overlay } from "./styles";

//Components
import { Button } from "../button";
import { Flex } from "../flex";
import { Input } from "../input";
import { Typography } from "../typography";

//Types
import { ModalProps } from "./types";
import { api } from "../../services/api";
import { TransactionsContext } from "../../contexts/transactions-context";

export function Modal({ isOpen, onClose }: ModalProps) {
  const [descriptionValue, setDescriptionValue] = useState("");

  const { setTransactions } = useContext(TransactionsContext);

  const [priceValue, setPriceValue] = useState("");

  const [categoryValue, setCategoryValue] = useState("");

  const [transactionDate, setTransactionDate] = useState("");

  const [transactionType, setTransactionType] = useState("");

  async function addTransaction() {
    try {
      const response = await api.post("/transactions", {
        transaction: descriptionValue || "N/A",
        transaction_value: priceValue || 0,
        transaction_category: categoryValue || "N/A",
        transaction_type: transactionType || "N/A",
        transaction_date: transactionDate
          ? new Date(transactionDate).getTime()
          : new Date().getTime(),
      });

      setTransactions((prevTransactions) => {
        return [...prevTransactions, response.data];
      });

      onClose();
    } catch (error) {
      console.error(error);
    }
  }

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
          <Input
            type="text"
            placeholder="Descrição"
            onChange={(event) => {
              setDescriptionValue(event.currentTarget.value);
            }}
          />
          <Input
            type="number"
            placeholder="Preço"
            onChange={(event) => {
              setPriceValue(event.currentTarget.value);
            }}
          />
          <Input
            type="text"
            placeholder="Categoria"
            onChange={(event) => {
              setCategoryValue(event.currentTarget.value);
            }}
          />

          <Input
            type="date"
            onChange={(event) => {
              setTransactionDate(event.currentTarget.value);
            }}
          />
        </Flex>
        <Flex gap="1rem" style={{ width: "100%" }}>
          <Flex gap="1rem" style={{ width: "100%" }}>
            <Button
              className="button_modal_content"
              backgroundColor={
                transactionType === "entry" ? "#00c187" : "#29292E"
              }
              onClick={() => {
                setTransactionType("entry");
              }}
            >
              <BsArrowUpCircle color="#0f0" fontSize="1.2rem" />
              <Typography>Entrada</Typography>
            </Button>
          </Flex>

          <Button
            className="button_modal_content"
            backgroundColor={
              transactionType === "outflow" ? "#00c187" : "#29292E"
            }
            onClick={() => {
              setTransactionType("outflow");
            }}
          >
            <BsArrowDownCircle color="#f00" fontSize="1.2rem" />
            <Typography>Saída</Typography>
          </Button>
        </Flex>
        <Button onClick={addTransaction}>Cadastrar</Button>
      </div>
    </Overlay>
  );
}
