import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <div className="App">
      {/* ChakraUIを利用する場合には以下のように <ChakraProvider> で囲む必要がある */}
      <ChakraProvider theme={theme}>
        {/* routerの設定をして上げる必要がある */}
        <BrowserRouter>
          {/* Buttonって書くだけでそれなりのボタンがもうきれいにできてる！ｓ */}
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
