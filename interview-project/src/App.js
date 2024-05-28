import logo from "./logo.svg";
import "./App.css";
import TabelData from "./components/TabelData";
import { useState } from "react";

function App() {
  return (
    <>
      <h1 className="title">My Data</h1>

      <TabelData />
    </>
  );
}

export default App;
