//Components
import { Header } from "./components/header";
import { Flex } from "./components/flex";
import { MainContent } from "./components/main-content";

//Contexts
import { TransactionsProvider } from "./contexts/transactions-context/transactions-context";

function App() {
  return (
    <TransactionsProvider>
      <Flex
        direction="column"
        justifyContent="flex-start"
        gap="1.5rem"
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          backgroundColor: "#202024",
        }}
      >
        <Header />
        <MainContent />
      </Flex>
    </TransactionsProvider>
  );
}

export default App;
