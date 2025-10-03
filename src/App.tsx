import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Trasactions } from "./pages/Trasactions";
import { TrasactionsProvider } from "./contexts/TrasactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TrasactionsProvider>
        <Trasactions/>
      </TrasactionsProvider>
    </ThemeProvider>
  )
}
