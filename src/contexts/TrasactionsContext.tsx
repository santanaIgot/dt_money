/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";



interface CreateTransactionInput {
  description: string;
  category: string;
  price: number;
  type: 'income' | 'outcome';
}
interface TransactionProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
}

interface TrasactionContextType {
  transactions: TransactionProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data:CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TrasactionContextType);

export function TrasactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function fetchTransactions(query?: string) {
    console.log("asdadsdsa", query);
    //  const url = new URL('/trasactions')

    //  //seta valor na url
    //  if(query){
    //     url.searchParams.append('q', query)
    //  }

    //  const response = await fetch(url);
    //  const data = await response.json();

    //  console.log(data);

    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    console.log("aa", response);
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { category, description, price, type } = data;
    const response = await api.post("/transactions", {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    });
    setTransactions(state => [response.data, ...state ])
  }
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
