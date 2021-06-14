import React from "react";
import "./Help.scss";
import halfImg1 from "../../images/img1.png";
import halfImg2 from "../../images/img1-2.png";
import friendImg1 from "../../images/img2.png";
import friendImg2 from "../../images/img2-2.png";
import audience from "../../images/img3.png";

function Help({ halfHelp, half, friend, friendHelp }) {
  const { clicked } = friend;
  return (
    <div className="helpHolder">
      <button onClick={halfHelp} disabled={half}>
        <img src={(half && halfImg2) || halfImg1} alt={halfImg1} />
      </button>
      <button onClick={friendHelp} disabled={clicked}>
        <img src={(clicked && friendImg2) || friendImg1} alt={friendImg1} />
      </button>
      <button>
        <img src={audience} alt={audience} />
      </button>
    </div>
  );
}

export default Help;
