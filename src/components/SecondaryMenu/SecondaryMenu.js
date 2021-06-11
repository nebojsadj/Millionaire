import React from "react";
import "./Secondary.scss";
import half from "../../images/img1.png";
import friend from "../../images/img2.png";
import audience from "../../images/img3.png";

function SecondaryMenu({ points }) {
  const money = [
    { number: "15 ⋄", money: "3000000" },
    { number: "14 ⋄", money: "1500000" },
    { number: "13 ⋄", money: "750000" },
    { number: "12 ⋄", money: "375000" },
    { number: "11 ⋄", money: "192000" },
    { number: "10 ⋄", money: "96000" },
    { number: "9 ⋄", money: "48000" },
    { number: "8 ⋄", money: "24000" },
    { number: "7 ⋄", money: "12000" },
    { number: "6 ⋄", money: "6000" },
    { number: "5 ⋄", money: "3000" },
    { number: "4 ⋄", money: "1500" },
    { number: "3 ⋄", money: "900" },
    { number: "2 ⋄", money: "600" },
    { number: "1 ⋄", money: "300" },
  ];

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
          <div className="money">{`${el.number} ${el.money}`}</div>
        ))}
        <hr />
        <div className="points">{points}</div>
      </div>
    </div>
  );
}

export default SecondaryMenu;
