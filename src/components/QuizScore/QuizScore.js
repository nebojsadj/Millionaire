import React from "react";
import "./QuizScore.scss";
import { money } from "../Data/Money";
import Help from "../Help/Help";

function QuizScore({
  points,
  index,
  halfHelp,
  half,
  friend,
  friendHelp,
  audience,
  audienceHelp,
  displayResult,
  setDisplayResult,
}) {
  const mark = (el) => {
    if (index < 15) {
      return money[index].id === el;
    }
  };

  const guaranted = (el) => {
    if (el === 5 || el === 10 || el === 15) {
      return "guaranteed";
    }
  };

  return (
    <div className={`quizScore ${displayResult && "quizScoreShow"}`}>
      <Help
        halfHelp={halfHelp}
        half={half}
        friend={friend}
        friendHelp={friendHelp}
        audience={audience}
        audienceHelp={audienceHelp}
        setDisplayResult={setDisplayResult}
      />
      <div className="profit" onClick={() => setDisplayResult(false)}>
        {money.map((el) => (
          <div
            className={`money ${guaranted(el.id)} ${
              mark(el.id) && "markMoney"
            }`}
            key={el.id}
          >{`${el.number} ${el.money}`}</div>
        ))}
        <hr />
        <div className="points">{points}</div>
      </div>
    </div>
  );
}

export default QuizScore;
