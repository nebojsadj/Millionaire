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
  audience,
  setAudience,
}) {
  const markers = ["A", "B", "C", "D"];
  return (
    <>
      <div className={startShow ? "startQuiz" : "hide"}>
        <button onClick={() => setStartShow(false)}>Start Quiz</button>
      </div>
      <div className={endShow ? "show" : "endQuiz"}>
        <h1>Your gain is:</h1>
        <h1>{`${result} $`}</h1>
        <h1>{`${addPoints} points`}</h1>
        <button onClick={tryAgain}>Try Again</button>
      </div>
      {friend.display && (
        <div id="friendHelp">
          <img src={friendImg} alt={friendImg} />
          <h2>{friend.answer}</h2>
          <button onClick={() => setFriend({ ...friend, display: false })}>
            Close
          </button>
        </div>
      )}
      {audience.display && (
        <div id="audienceHelp">
          <div className="colHolder">
            {audience.columns.map((el, i) => (
              <div className="col" key={i}>
                {el}
              </div>
            ))}
          </div>
          <div className="markHolder">
            {markers.map((el) => (
              <div key={el}>{el}</div>
            ))}
          </div>
          <button onClick={() => setAudience({ ...audience, display: false })}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default StartEnd;
