import logo from "./logo.svg";
import "./App.css";
import TabelData from "./components/TabelData";
import HeadTable from "./components/HeadTable";

function App() {
  return (
    <>
      <h1>My Data</h1>
      <HeadTable />
      <TabelData />
    </>
  );
}

export default App;
