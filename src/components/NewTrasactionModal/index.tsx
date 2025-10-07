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
  // type:z.enum(['income', 'outcome'])
})


type newTransactionInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTrasactionModal() {
  const { register, handleSubmit, formState:{isSubmitting}} = useForm<newTransactionInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

 async function createNewTrasaction(data: newTransactionInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('seu data:--------',data);
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
          <input type="text" placeholder="description" required {...register('description')}/>
          <input type="text" placeholder="price" required {...register('price', {valueAsNumber:true})}/>
          <input type="text" placeholder="category" required {...register('category')}/>
          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saida
            </TransactionTypeButton>
              <button type="submit" disabled={isSubmitting}>Cadastrar</button>
          </TransactionType>
        
        </form>
      </Content>
    </Dialog.Portal>
  );
}
