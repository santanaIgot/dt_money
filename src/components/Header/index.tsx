import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import LogoImg from '../../assets/Logo.svg'

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="" />
                <NewTransactionButton>nova trasação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}