import React, { useState, useEffect } from "react";
import MainMenu from "./components/MainMenu/MainMenu";
import SecondaryMenu from "./components/SecondaryMenu/SecondaryMenu";
import { questions } from "./components/Data/Questions";

function App() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);
  const [disable, setDisable] = useState(true);
  const [selected, setSelected] = useState("");
  const { question, options, correct, points } = questions[counter];
  const [shuffleOptions, setShuffleOptions] = useState(options);
  const [addPoints, setAddPoints] = useState(0);
  const [index, setIndex] = useState(15);

  const nextQuestion = () => {
    setCounter(counter + 1);
    setSelected("");
  };

  const handleSelect = (option, i) => {
    setSelected(option);
    if (option === correct) {
      setDisable(false);
      setAddPoints(addPoints + points);
      setIndex(index - 1);
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
        disable={disable}
        selected={selected}
        shuffleOptions={shuffleOptions}
        handleSelect={handleSelect}
        currentSelected={currentSelected}
        nextQuestion={nextQuestion}
      />
      <SecondaryMenu points={addPoints} index={index} />
    </div>
  );
}

export default App;
