import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz/Quiz";
import QuizScore from "./components/QuizScore/QuizScore";
import { questions } from "./components/Data/Questions";
import { money } from "./components/Data/Money";
import StartEnd from "./components/Start-End/StartEnd";

function App() {
  const [counter, setCounter] = useState(0);
  const [startShow, setStartShow] = useState(true);
  const [endShow, setEndShow] = useState(false);
  const [disable, setDisable] = useState(true);
  const [selected, setSelected] = useState("");
  const { question, options, correct, points } = questions[counter];
  const [shuffleOptions, setShuffleOptions] = useState(options);
  const [addPoints, setAddPoints] = useState(0);
  const [index, setIndex] = useState(15);
  const [result, setResult] = useState(0);

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
      setTimeout(() => {
        setEndShow(true);
      }, 3000);
      error();
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

  const tryAgain = () => {
    setEndShow(false);
    setStartShow(true);
    setCounter(0);
    setSelected("");
    setIndex(15);
    setAddPoints(0);
  };

  const error = () => {
    if (index > 10) {
      setResult(0);
    } else if (index === 0) {
      setResult(money[0].money);
    } else if (index <= 5) {
      setResult(money[5].money);
    } else if (index <= 10) {
      setResult(money[10].money);
    } else if (index < 15) {
      setResult(money[index].money);
    }
  };

  const quit = () => {
    setEndShow(true);
    index < 15 ? setResult(money[index].money) : setResult(0);
  };

  useEffect(() => {
    setShuffleOptions(options.sort(() => Math.random() - 0.5));
    setDisable(true);
  }, [counter]);

  return (
    <div className="App">
      <StartEnd
        startShow={startShow}
        setStartShow={setStartShow}
        endShow={endShow}
        addPoints={addPoints}
        tryAgain={tryAgain}
        result={result}
      />
      <Quiz
        question={question}
        disable={disable}
        selected={selected}
        shuffleOptions={shuffleOptions}
        handleSelect={handleSelect}
        currentSelected={currentSelected}
        nextQuestion={nextQuestion}
        quit={quit}
      />
      <QuizScore points={addPoints} index={index} />
    </div>
  );
}

export default App;
