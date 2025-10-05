/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHilight, TrasactionContainer, TrasactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TrasactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/format";

export function Trasactions() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />
      <TrasactionContainer>
        <SearchForm />
        <TrasactionsTable>
          <tbody>
            {transactions.map((trasaction) => {
              return (
                <tr key={trasaction.id}>
                  <td width="50%">{trasaction.description}</td>
                  <td>
                    <PriceHilight variant={trasaction.type}> 
                      {trasaction.type == 'outcome' && '- '}
                      {priceFormatter.format(trasaction.price)}
                    </PriceHilight>
                  </td>
                  <td>{trasaction.category}</td>
                  <td>{dateFormatter.format(new Date(trasaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TrasactionsTable>
      </TrasactionContainer>
    </div>
  );
}
