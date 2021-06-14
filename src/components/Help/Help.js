import React from "react";
import "./Help.scss";
import halfImg1 from "../../images/img1.png";
import halfImg2 from "../../images/img1-2.png";
import friendImg1 from "../../images/img2.png";
import friendImg2 from "../../images/img2-2.png";
import audienceImg1 from "../../images/img3.png";
import audienceImg2 from "../../images/img3-2.png";

function Help({ halfHelp, half, friend, friendHelp, audience, audienceHelp }) {
  return (
    <div className="helpHolder">
      <button onClick={halfHelp} disabled={half}>
        <img src={(half && halfImg2) || halfImg1} alt={halfImg1} />
      </button>
      <button onClick={friendHelp} disabled={friend.clicked}>
        <img
          src={(friend.clicked && friendImg2) || friendImg1}
          alt={friendImg1}
        />
      </button>
      <button onClick={audienceHelp} disabled={audience.clicked}>
        <img
          src={(audience.clicked && audienceImg2) || audienceImg1}
          alt={audienceImg1}
        />
      </button>
    </div>
  );
}

export default Help;
