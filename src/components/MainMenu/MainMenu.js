import React from "react";
import "./Main.scss";
import poster from "../../images/poster.jpg";

function MainMenu({
  question,
  disable,
  nextQuestion,
  shuffleOptions,
  selected,
  currentSelected,
  handleSelect,
}) {
  const markers = ["A", "B", "C", "D"];
  return (
    <div id="main">
      <h1>Millionaire quiz</h1>
      <img src={poster} alt={poster} />
      <div id="questions">
        <h2>{question}</h2>
      </div>
      <div id="btnHolder">
        <button
          className={(disable && "disabled") || "btn-question"}
          onClick={nextQuestion}
          disabled={disable}
        >
          Next question
        </button>
        <button className="btn-giveUp">Quit</button>
      </div>
      <div id="options">
        {shuffleOptions.map((option, i) => (
          <button
            className={`option ${selected && currentSelected(option)}`}
            onClick={() => handleSelect(option)}
            key={i}
            disabled={selected}
          >
            <p>
              <span>* {markers[i]} : </span>
              {option}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;
