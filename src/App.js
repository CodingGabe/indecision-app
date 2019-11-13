import React from "react";
import "./App.css";
import Header from "./components/Header";
import Options from "./components/Options";
import AddOption from "./components/AddOption";
import Action from "./components/Action";

function App() {
  const title = "Indecision";
  const subtitle = "Let the computer decide your fate";
  const options = ['stuff one', 'stuff two', 'stuff three'];

  return (
    <div className="container">
      <Header title={title} subtitle={subtitle} />
      <Options options={options} />
      <Action />
      <AddOption />
    </div>
  );
}

export default App;
