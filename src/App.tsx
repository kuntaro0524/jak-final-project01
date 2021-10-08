import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function App() {
  return (
    <div className="App">
      {/* ChakraUIを利用する場合には以下のように <ChakraProvider> で囲む必要がある */}
      <ChakraProvider theme={theme}>
        {/* Buttonって書くだけでそれなりのボタンがもうきれいにできてる！ｓ */}
        <Button colorScheme="teal"> ボタン </Button>
        <h1> くんたろ </h1>
      </ChakraProvider>
    </div>
  );
}
