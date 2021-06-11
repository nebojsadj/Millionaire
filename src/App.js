import React, { useState, useEffect } from "react";
import MainMenu from "./components/MainMenu/MainMenu";
import SecondaryMenu from "./components/SecondaryMenu/SecondaryMenu";
import { questions } from "./components/Questions";

function App() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);
  const [disable, setDisable] = useState(true);
  const [selected, setSelected] = useState("");
  const { question, options, correct, points } = questions[counter];
  const [shuffleOptions, setShuffleOptions] = useState(options);
  const [addPoints, setAddPoints] = useState(0);

  const nextQuestion = () => {
    setCounter(counter + 1);
    setSelected("");
  };

  const handleSelect = (option) => {
    setSelected(option);
    if (option === correct) {
      setDisable(false);
      setAddPoints(addPoints + points);
    } else {
      setDisable(true);
    }
  };

  const currentSelected = (select) => {
    if (selected === select && selected === correct) {
      return "green";
    } else if (selected === select && selected !== correct) {
      return "red";
    } else if (select === correct) {
      return "green";
    }
  };

  useEffect(() => {
    setShuffleOptions(options.sort(() => Math.random() - 0.5));
    setDisable(true);
  }, [counter]);

  return (
    <div className="App">
      <div className={show ? "startQuiz" : "hide"}>
        <button onClick={() => setShow(!show)}>Start Quiz</button>
      </div>
      <MainMenu
        question={question}
        counter={counter}
        setCounter={setCounter}
        disable={disable}
        selected={selected}
        shuffleOptions={shuffleOptions}
        handleSelect={handleSelect}
        currentSelected={currentSelected}
        nextQuestion={nextQuestion}
      />
      <SecondaryMenu points={addPoints} />
    </div>
  );
}

export default App;
