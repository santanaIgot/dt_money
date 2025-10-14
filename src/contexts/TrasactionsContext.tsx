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
    fetchTrasactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TrasactionContextType);

export function TrasactionsProvider({children}: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
     
      async function fetchTrasactions(query?: string) {
         const url = new URL('http://localhost:3333/trasactions')

         //seta valor na url    
         if(query){
            url.searchParams.append('q', query)
         }

         const response = await fetch(url);
         const data = await response.json();
    
         console.log(data);
         setTransactions(data)
      }
      useEffect(()=>{
       fetchTrasactions()
      },[])



    return(
        <TransactionContext.Provider value={{
            transactions, fetchTrasactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}