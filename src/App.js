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
  let copyOptions = [].concat(options);
  const [shuffleOptions, setShuffleOptions] = useState(copyOptions);
  const [addPoints, setAddPoints] = useState(0);
  const [index, setIndex] = useState(15);
  const [result, setResult] = useState(0);
  const [half, setHalf] = useState(false);
  const [friend, setFriend] = useState({
    clicked: false,
    answer: "",
    display: false,
  });
  const [audience, setAudience] = useState({
    clicked: false,
    display: false,
    columns: [],
  });

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
      }, 2000);
      incorrectAnswer();
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

  const halfHelp = () => {
    setHalf(true);
    if (shuffleOptions[0] !== correct && shuffleOptions[1] !== correct) {
      shuffleOptions.splice(0, 2, "", "");
    } else if (shuffleOptions[0] !== correct && shuffleOptions[2] !== correct) {
      shuffleOptions.splice(0, 1, "");
      shuffleOptions.splice(2, 1, "");
    } else if (shuffleOptions[0] !== correct && shuffleOptions[3] !== correct) {
      shuffleOptions.splice(0, 1, "");
      shuffleOptions.splice(3, 1, "");
    } else if (shuffleOptions[1] !== correct && shuffleOptions[2] !== correct) {
      shuffleOptions.splice(1, 2, "", "");
    } else if (shuffleOptions[1] !== correct && shuffleOptions[3] !== correct) {
      shuffleOptions.splice(1, 1, "");
      shuffleOptions.splice(3, 1, "");
    } else if (shuffleOptions[2] !== correct && shuffleOptions[3] !== correct) {
      shuffleOptions.splice(2, 2, "", "");
    }

    return setShuffleOptions([...shuffleOptions]);
  };

  const friendHelp = () => {
    let friendAnswers = [
      "Nisam sigurna",
      "Nisam sigurna",
      "Nisam siguran",
      'Mislim da je "A"',
      'Mislim da je "B"',
      'Mislim da je "C"',
      'Mislim da je "D"',
    ];
    let r = Math.floor(Math.random() * friendAnswers.length);

    setFriend({
      ...friend,
      clicked: true,
      display: true,
      answer: friendAnswers[r],
    });
  };

  const audienceHelp = () => {
    const otherColumns = [
      <div className="column1"></div>,
      <div className="column2"></div>,
      <div className="column3"></div>,
    ];

    const randomColumns = otherColumns.sort(() => Math.random() - 0.5);
    const correctColumn = <div className="column"></div>;

    for (let i = 0; i < 4; i++) {
      if (shuffleOptions[i] === correct) {
        randomColumns.splice(i, 0, correctColumn);
      }
    }
    setAudience({
      ...audience,
      clicked: true,
      display: true,
      columns: randomColumns,
    });
  };

  const tryAgain = () => {
    setEndShow(false);
    setStartShow(true);
    setCounter(0);
    setSelected("");
    setIndex(15);
    setAddPoints(0);
    copyOptions = [].concat(options);
    setShuffleOptions([...copyOptions]);
    setHalf(false);
    setFriend({ ...friend, clicked: false, display: false });
  };

  const incorrectAnswer = () => {
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
    setShuffleOptions(copyOptions.sort(() => Math.random() - 0.5));
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
        friend={friend}
        setFriend={setFriend}
        audience={audience}
        setAudience={setAudience}
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
      <QuizScore
        points={addPoints}
        index={index}
        halfHelp={halfHelp}
        half={half}
        friend={friend}
        friendHelp={friendHelp}
        audience={audience}
        audienceHelp={audienceHelp}
      />
    </div>
  );
}

export default App;
