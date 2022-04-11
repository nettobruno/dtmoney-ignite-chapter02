import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  // Esse tipo aceita qualquer tipo de conteúdo válido para o React. EX: Tags JSX, Textos, etx.
  children: ReactNode;
}

// Seleciona a interface de transactions, mas não pega os itens que deixamos dentro de ''(aspas)
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


// Faz algo semelhante com a linha de cima, mas neste caso, os itens que deixamos dentro de ''(aspas), serão os selecionados
{/* type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>; */}


// Irá funcionar, mas deixa o código mais verboso, e as opções acima são mais interessantes para este caso
{/* 
  interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string;
  }
*/}

interface TransactionsContextData {
  transactions: Transaction[];
  // Promise<void>: É necessário fazer isso ao final da linha, pois a função é assíncrona, e por padrão, toda função assíncrona retorna uma Promise em JS
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=> {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;

    // Utilizando o conceito de imutabilidade, sempre que for necessário adicionar uma nova informação dentro de um vetor, copiamos todas as informações que já estão lá dentro(linha 59), e adicionamos a nova informação no final(linha 60).
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}


export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}