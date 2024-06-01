import { ChakraProvider, Container, Text } from "@chakra-ui/react";
import "./App.css";
import { DataTable } from "./components";
import { users } from "./api/users";
import { countries } from "./api/countries";

function App() {
  return (
    <ChakraProvider>
      <DataTable data={countries} title="My countries" />
      <br></br>
      <DataTable data={users} title="My Data" />
    </ChakraProvider>
  );
}

export default App;
