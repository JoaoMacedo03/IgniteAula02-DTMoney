import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionContext, TransactionProvider } from "./TransactionContext";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleModalNewTransaction() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleModalNewTransaction} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleModalNewTransaction}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}