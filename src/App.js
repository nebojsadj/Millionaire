import React, { useState } from "react";
import MainMenu from "./components/MainMenu/MainMenu";
import SecondaryMenu from "./components/SecondaryMenu/SecondaryMenu";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <MainMenu counter={counter} setCounter={setCounter} />
      <SecondaryMenu />
    </div>
  );
}

export default App;
