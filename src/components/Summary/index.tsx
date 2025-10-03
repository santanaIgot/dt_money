/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TrasactionsContext";


export function Summary() {
    const {transactions} = useContext(TransactionContext)
    const income = transactions.reduce((sum, transaction) => {
        return transaction.type === 'income' ? sum + transaction.price : sum;
    }, 0);


    const outcome = transactions.reduce((sum, transaction) => {
        return transaction.type === 'outcome' ? sum - transaction.price : sum;
    }, 0);


    
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{
                    income
                }</strong>
            </SummaryCard>
             <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>
                 {outcome}
                </strong>
            </SummaryCard>
             <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>{ transactions.reduce((sum, transaction) => sum + transaction.price, 0)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}