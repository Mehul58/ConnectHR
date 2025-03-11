import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmployeesListComponent from "./components/EmployeesListComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <EmployeesListComponent />
      <FooterComponent />
    </>
  );
}

export default App;
