import { ChakraProvider, Container, Text } from "@chakra-ui/react";
import "./App.css";
import { DataTable } from "./components";
import { users } from "./api/users";
import { countries } from "./api/countries";

function App() {
  return (
    <ChakraProvider>
      <Container>
        <DataTable data={users} title="My Data" />
      </Container>
    </ChakraProvider>
  );
}

export default App;
