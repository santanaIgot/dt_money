/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHilight, TrasactionContainer, TrasactionsTable } from "./styles";

interface TrasactionProps{
  id:number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAt: string
}

export function Trasactions() {

  const [trasactions, setTrasactions] = useState<TrasactionProps[]>([]);
 
  async function loadTrasactions() {

    
     const response = await fetch('http://localhost:3333/trasactions');
     const data = await response.json()

     console.log(data);
     setTrasactions(data)
  }
  useEffect(()=>{
   loadTrasactions()
  },[])
  return (
    <div>
      <Header />
      <Summary />
      <TrasactionContainer>
        <SearchForm/>
        <TrasactionsTable>
          <tbody>
            {trasactions.map(trasaction => {
              return(
                    <tr key={trasaction.id}>
              <td width="50%">{trasaction.description}</td>
              <td><PriceHilight variant="income">{trasaction.price}</PriceHilight></td>
              <td>{trasaction.category}</td>
              <td>{trasaction.createdAt}</td>
            </tr>
              )
            })}
          
          
          </tbody>
        </TrasactionsTable>
      </TrasactionContainer>
    </div>
  );
}
