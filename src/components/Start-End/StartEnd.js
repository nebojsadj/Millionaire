import React from "react";
import "./StartEnd.scss";

function StartEnd({
  startShow,
  setStartShow,
  endShow,
  addPoints,
  tryAgain,
  result,
}) {
  return (
    <>
      <div className={startShow ? "startQuiz" : "hide"}>
        <button onClick={() => setStartShow(!startShow)}>Start Quiz</button>
      </div>
      <div className={endShow ? "show" : "endQuiz"}>
        <h1>Your gain is:</h1>
        <h1>{`${result} $`}</h1>
        <h1>{`${addPoints} points`}</h1>
        <button onClick={tryAgain}>Try Again</button>
      </div>
    </>
  );
}

export default StartEnd;
