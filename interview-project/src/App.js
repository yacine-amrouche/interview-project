import "./App.css";
import TabelData from "./components/TabelData";
import { ChakraProvider, Heading } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Heading>My Data</Heading>
        <TabelData />
      </ChakraProvider>
    </>
  );
}

export default App;
