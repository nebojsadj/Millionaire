import React from "react";
import "./Secondary.scss";
import half from "../../images/img1.png";
import friend from "../../images/img2.png";
import audience from "../../images/img3.png";

function SecondaryMenu() {
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
        <div className="money">15 ⋄ 3000000</div>
        <div className="money">14 ⋄ 1500000</div>
        <div className="money">13 ⋄ 750000</div>
        <div className="money">12 ⋄ 375000</div>
        <div className="money">11 ⋄ 192000</div>
        <div className="money">10 ⋄ 96000</div>
        <div className="money">9 ⋄ 48000</div>
        <div className="money">8 ⋄ 24000</div>
        <div className="money">7 ⋄ 12000</div>
        <div className="money">6 ⋄ 6000</div>
        <div className="money">5 ⋄ 3000</div>
        <div className="money">4 ⋄ 1500</div>
        <div className="money">3 ⋄ 900</div>
        <div className="money">2 ⋄ 600</div>
        <div className="money">1 ⋄ 300</div>
        <hr />
        <div className="points">100</div>
      </div>
    </div>
  );
}

export default SecondaryMenu;
