import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImg from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTrasactionModal } from "../NewTrasactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTrasactionModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
