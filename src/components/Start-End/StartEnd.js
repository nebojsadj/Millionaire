import React from "react";
import "./StartEnd.scss";
import friendImg from "../../images/img2.png";

function StartEnd({
  startShow,
  setStartShow,
  endShow,
  addPoints,
  tryAgain,
  result,
  friend,
  setFriend,
}) {
  const { display, answer } = friend;
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
      {display && (
        <div id="friendHelp">
          <img src={friendImg} alt={friendImg} />
          <h2>{answer}</h2>
          <button onClick={() => setFriend({ ...friend, display: false })}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default StartEnd;
