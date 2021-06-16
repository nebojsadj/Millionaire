import React, { useRef } from "react";
import "./Help.scss";
import halfImg1 from "../../images/img1.png";
import halfImg2 from "../../images/img1-2.png";
import friendImg1 from "../../images/img2.png";
import friendImg2 from "../../images/img2-2.png";
import audienceImg1 from "../../images/img3.png";
import audienceImg2 from "../../images/img3-2.png";
import halfSound from "../../audioFiles/finalAnswer.mp3";
import friendSound from "../../audioFiles/finalAnswer.mp3";
import audienceSound from "../../audioFiles/finalAnswer.mp3";

function Help({
  halfHelp,
  half,
  friend,
  friendHelp,
  audience,
  audienceHelp,
  setDisplayResult,
}) {
  const halfAudio = useRef();
  const friendAudio = useRef();
  const audienceAudio = useRef();
  return (
    <>
      <div className="helpHolder" onClick={() => setDisplayResult(false)}>
        <button onClick={() => halfHelp(halfAudio)} disabled={half}>
          <img src={(half && halfImg2) || halfImg1} alt={halfImg1} />
        </button>
        <button
          onClick={() => friendHelp(friendAudio)}
          disabled={friend.clicked}
        >
          <img
            src={(friend.clicked && friendImg2) || friendImg1}
            alt={friendImg1}
          />
        </button>
        <button
          onClick={() => audienceHelp(audienceAudio)}
          disabled={audience.clicked}
        >
          <img
            src={(audience.clicked && audienceImg2) || audienceImg1}
            alt={audienceImg1}
          />
        </button>
      </div>
      <audio ref={halfAudio} src={halfSound}></audio>
      <audio ref={friendAudio} src={friendSound}></audio>
      <audio ref={audienceAudio} src={audienceSound}></audio>
    </>
  );
}

export default Help;
