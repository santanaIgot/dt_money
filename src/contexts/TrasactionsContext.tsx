/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState, type ReactNode } from "react";

interface TransactionProps{
  id:number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAt: string,
}


interface TrasactionContextType {
    transactions: TransactionProps[],
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TrasactionContextType);

export function TrasactionsProvider({children}: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
     
      async function loadTrasactions() {
         const response = await fetch('http://localhost:3333/trasactions');
         const data = await response.json()
    
        //  console.log(data);
         setTransactions(data)
      }
      useEffect(()=>{
       loadTrasactions()
      },[])



    return(
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}