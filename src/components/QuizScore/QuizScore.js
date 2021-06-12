import React from "react";
import "./QuizScore.scss";
import { money } from "../Data/Money";
import half from "../../images/img1.png";
import friend from "../../images/img2.png";
import audience from "../../images/img3.png";

function QuizScore({ points, index }) {
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
    <div id="secondary">
      <div className="helpHolder">
        <div className="help">
          <img src={half} alt={half} />
        </div>
        <div className="help">
          <img src={friend} alt={friend} />
        </div>
        <div className="help">
          <img src={audience} alt={audience} />
        </div>
      </div>
      <div className="profit">
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
