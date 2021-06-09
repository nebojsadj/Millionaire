import React, { useState } from "react";
import "./Main.scss";
import poster from "../../images/poster.jpg";
import { questions } from "../Questions";

function MainMenu({ counter, setCounter }) {
  const [show, setShow] = useState(true);
  const { question, options, answer, points } = questions[counter];

  return (
    <div id="main">
      <h1>Millionaire quiz</h1>
      <img src={poster} alt={poster} />
      <div id="questions">
        <h2>{question}</h2>
      </div>
      <div id="btnHolder">
        <button className="btn-pitanje">Postavi pitanje</button>
        <button className="btn-odustani">Odustani</button>
      </div>
      <div id="options">
        <div className="optionHolder">
          <div className="option">
            <p>
              <span>* A :</span> {options[0]}
            </p>
          </div>
          <div className="option">
            <p>
              <span>* B :</span> {options[1]}
            </p>
          </div>
        </div>
        <div className="optionHolder">
          <div className="option">
            <p>
              <span>* C :</span> {options[2]}
            </p>
          </div>
          <div className="option">
            <p>
              <span>* D :</span> {options[3]}
            </p>
          </div>
        </div>
      </div>
      <div className={show ? "startQuiz" : "hide"}>
        <button onClick={() => setShow(!show)}>Start Quiz</button>
      </div>
    </div>
  );
}

export default MainMenu;
