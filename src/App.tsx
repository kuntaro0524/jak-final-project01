import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* ChakraUIを利用する場合には以下のように <ChakraProvider> で囲む必要がある */}
      <ChakraProvider>
        {/* Buttonって書くだけでそれなりのボタンがもうきれいにできてる！ｓ */}
        <Button colorScheme="teal"> ボタン </Button>
      </ChakraProvider>
    </div>
  );
}
