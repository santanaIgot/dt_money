/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";

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
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TrasactionContextType);

export function TrasactionsProvider({children}: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
     
      async function fetchTransactions(query?: string) {
        //  const url = new URL('/trasactions')

        //  //seta valor na url    
        //  if(query){
        //     url.searchParams.append('q', query)
        //  }

        //  const response = await fetch(url);
        //  const data = await response.json();
    
        //  console.log(data);

        const response = await api.get('/trasactions', {
            params:{
                q:query
            }
        })
         setTransactions( response.data)
      }
      useEffect(()=>{
       fetchTransactions()
      },[])



    return(
        <TransactionContext.Provider value={{
            transactions, fetchTransactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}