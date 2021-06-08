import React from "react";
import "./Main.scss";
import poster from "../../images/poster.jpg";

function MainMenu() {
  return (
    <div id="main">
      <h1>Millionaire quiz</h1>
      <img src={poster} alt={poster} />
      <div id="questions">
        <h2>
          Prema prici poznate serije stripova i filmova, Supermen postaje slabic
          u dodiru sa...
        </h2>
      </div>
      <div id="btnHolder">
        <button className="btn-pitanje">Postavi pitanje</button>
        <button className="btn-odustani">Odustani</button>
      </div>
      <div id="options">
        <div className="optionHolder">
          <div className="option">
            <p>
              <span>* A :</span> medjunarodno
            </p>
          </div>
          <div className="option">
            <p>
              <span>* B :</span> maloprodajno
            </p>
          </div>
        </div>
        <div className="optionHolder">
          <div className="option">
            <p>
              <span>* C :</span> maloprodajno
            </p>
          </div>
          <div className="option">
            <p>
              <span>* D :</span> maloprodajno
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
