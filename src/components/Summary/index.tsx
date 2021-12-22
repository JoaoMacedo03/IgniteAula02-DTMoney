import { useContext } from 'react';

import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container } from "./styles";
import { TransactionContext } from '../../TransactionContext';

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  console.log('gggg -> ', transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}