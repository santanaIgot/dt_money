/* eslint-disable @typescript-eslint/no-unused-vars */
import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TrasactionsContext";


const searchFormSchema = z.object({
    query: z.string(),
})


type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const {fetchTransactions} = useContext(TransactionContext);
    const {register, handleSubmit, formState:{
        isSubmitting,
    }} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        console.log(data.query);
        
        await fetchTransactions(data.query)
    }
    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque uma trasação"
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}