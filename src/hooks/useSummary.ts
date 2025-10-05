/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { TransactionContext } from "../contexts/TrasactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome -= transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  // const income = transactions.reduce((sum, transaction) => {
  //     return transaction.type === 'income' ? sum + transaction.price : sum;
  // }, 0);

  // const outcome = transactions.reduce((sum, transaction) => {
  //     return transaction.type === 'outcome' ? sum - transaction.price : sum;
  // }, 0);

  // const total = transactions.reduce((sum, transaction) => sum + transaction.price, 0)

  return summary;
}
