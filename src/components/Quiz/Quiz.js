import React, { useRef } from "react";
import "./Quiz.scss";
import poster from "../../images/poster.jpg";
import logo from "../../images/logo.png";
import correctSound from "../../audioFiles/win.mp3";
import incorrectSound from "../../audioFiles/lose.mp3";
import questionSound from "../../audioFiles/question.mp3";
import quitSound from "../../audioFiles/finalAnswer.mp3";

function Quiz({
  question,
  disable,
  nextQuestion,
  shuffleOptions,
  selected,
  currentSelected,
  handleSelect,
  quit,
  setDisplayResult,
}) {
  const markers = ["A", "B", "C", "D"];
  const correctAudio = useRef();
  const incorrectAudio = useRef();
  const questionAudio = useRef();
  const quitAudio = useRef();
  return (
    <>
      <div id="main">
        <h1>Millionaire quiz</h1>
        <img id="poster" src={poster} alt={poster} />
        <img id="logo" src={logo} alt={logo} />
        <div id="questions">
          <h2>{question}</h2>
        </div>
        <div id="btnHolder">
          <button
            className={(disable && "disabled") || "btn-question"}
            onClick={() => nextQuestion(questionAudio)}
            disabled={disable}
          >
            Next question
          </button>
          <button
            className="btn showResult"
            onClick={() => setDisplayResult(true)}
          >
            Score/Help
          </button>
          <button className="btn-giveUp" onClick={() => quit(quitAudio)}>
            Quit
          </button>
        </div>
        <div id="options">
          {shuffleOptions.map((option, i) => (
            <button
              className={`option ${selected && currentSelected(option)}`}
              onClick={() => handleSelect(option, correctAudio, incorrectAudio)}
              key={i}
              disabled={selected}
            >
              <p>
                <span>{option && `* ${markers[i]} : `}</span>
                {option}
              </p>
            </button>
          ))}
        </div>
      </div>
      <audio ref={correctAudio} src={correctSound}></audio>
      <audio ref={incorrectAudio} src={incorrectSound}></audio>
      <audio ref={questionAudio} src={questionSound}></audio>
      <audio ref={quitAudio} src={quitSound}></audio>
    </>
  );
}

export default Quiz;
