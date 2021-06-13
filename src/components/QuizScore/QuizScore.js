import React from "react";
import "./QuizScore.scss";
import { money } from "../Data/Money";
import halfImg1 from "../../images/img1.png";
import halfImg2 from "../../images/img1-2.png";
import friend from "../../images/img2.png";
import audience from "../../images/img3.png";

function QuizScore({ points, index, helpHalf, half }) {
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
        <button onClick={helpHalf} disabled={half}>
          <img src={(half && halfImg2) || halfImg1} alt={halfImg1} />
        </button>
        <button>
          <img src={friend} alt={friend} />
        </button>
        <button>
          <img src={audience} alt={audience} />
        </button>
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
