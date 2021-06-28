import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz/Quiz";
import QuizScore from "./components/QuizScore/QuizScore";
import { questions } from "./components/Data/Questions";
import { money } from "./components/Data/Money";
import StartEnd from "./components/Start-End/StartEnd";
import {
  otherColumns,
  correctColumn,
  friendAnswers,
} from "./components/Data/HelpData";

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
  const [displayResult, setDisplayResult] = useState(false);
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

  useEffect(() => {
    setShuffleOptions(copyOptions.sort(() => Math.random() - 0.5));
    setDisable(true);
  }, [counter]);

  const nextQuestion = (questionAudio) => {
    questionAudio.current.load();
    questionAudio.current.play();
    setCounter(counter + 1);
    setSelected("");
  };

  const handleSelect = (option, correctAudio, incorrectAudio) => {
    setSelected(option);

    if (option === correct) {
      setDisable(false);
      setAddPoints(addPoints + points);
      setIndex(index - 1);
      correctAudio.current.load();
      correctAudio.current.play();
      if (counter === 14) {
        setDisable(true);
        setTimeout(() => {
          setEndShow(true);
        }, 2000);
        setResult(3000000);
      }
    } else {
      setDisable(true);
      setTimeout(() => {
        setEndShow(true);
      }, 2000);
      incorrectAnswer();
      incorrectAudio.current.play();
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

  const halfHelp = (audio) => {
    audio.current.play();
    setHalf(true);
    let filteredIndex = [];
    for (const element of shuffleOptions) {
      if (element !== correct) {
        filteredIndex.push(shuffleOptions.indexOf(element));
      }
    }
    shuffleOptions.splice(filteredIndex[0], 1, "");
    shuffleOptions.splice(filteredIndex[1], 1, "");

    return setShuffleOptions([...shuffleOptions]);
  };

  const friendHelp = (afriendAudio) => {
    afriendAudio.current.play();
    let random = Math.floor(Math.random() * friendAnswers.length);

    setFriend({
      ...friend,
      clicked: true,
      display: true,
      answer: friendAnswers[random],
    });
  };

  const audienceHelp = (audienceAudio) => {
    audienceAudio.current.play();
    const columns = [...otherColumns];
    const randomColumns = columns.sort(() => Math.random() - 0.5);

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
    setAudience({ ...audience, clicked: false, display: false });
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

  const quit = (quitAudio) => {
    quitAudio.current.play();
    setEndShow(true);
    index < 15 ? setResult(money[index].money) : setResult(0);
  };

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
        setDisplayResult={setDisplayResult}
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
        displayResult={displayResult}
        setDisplayResult={setDisplayResult}
      />
    </div>
  );
}

export default App;
