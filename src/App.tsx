import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="App">
      <Header />
      <Dashboard />
    </main>
  );
}

export default App;
