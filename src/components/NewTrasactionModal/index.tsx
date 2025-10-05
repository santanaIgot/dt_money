/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Dialog from "@radix-ui/react-dialog";
import {
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import  * as z  from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category:z.string(),
  type:z.enum(['income', 'outcome'])
})


type newTransactionInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTrasactionModal() {
  const { register, handleSubmit, formState:{isSubmitting}} = useForm<newTransactionInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

 async function createNewTrasaction(data: newTransactionInputs) {
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log(data);
  
}
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Close>
          <X />
        </Dialog.Close>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form onSubmit={handleSubmit(createNewTrasaction)}>
          <input type="text" {...register('description')}  placeholder="description" required />
          <input type="text" {...register('price',{valueAsNumber:true})} placeholder="price" required />
          <input type="text" {...register('category')} placeholder="category" required />
          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saida
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
