import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHilight, TrasactionContainer, TrasactionsTable } from "./styles";

export function Trasactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TrasactionContainer>
        <TrasactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHilight variant="income">R$ 13.000,00</PriceHilight></td>
              <td>venda</td>
              <td>28/09/2025</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHilight variant="outcome">R$ 13.000,00</PriceHilight></td>
              <td>venda</td>
              <td>28/09/2025</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHilight variant="income">R$ 13.000,00</PriceHilight></td>
              <td>venda</td>
              <td>28/09/2025</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHilight variant="income">R$ 13.000,00</PriceHilight></td>
              <td>venda</td>
              <td>28/09/2025</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHilight variant="income">R$ 13.000,00</PriceHilight></td>
              <td>venda</td>
              <td>28/09/2025</td>
            </tr>
          </tbody>
        </TrasactionsTable>
      </TrasactionContainer>
    </div>
  );
}
