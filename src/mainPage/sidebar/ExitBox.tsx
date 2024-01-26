import React from "react";
import LogoutIcon from "../../img/logout.svg";
import "./index.css";

export const ExitBox = () => {
  return (
    <div className="exit-box-container">
      <div className="exit-box">
        <div className="tab-item-inner">
          <img className="img" alt="logo" src={LogoutIcon} />
          <div className="tab-icon-text">Thoát</div>
        </div>
      </div>
    </div>
  );
};
