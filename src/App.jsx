import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

function App() {
  return (
    <>
      <div>
        <Hello />

        <button id="rock">rock</button>
        <button id="paper">paper</button>
        <button id="scissors">scissors</button>
      </div>
      <div>
        <button id="fight">Fight</button>
      </div>
    </>
  );
}

export default App;
