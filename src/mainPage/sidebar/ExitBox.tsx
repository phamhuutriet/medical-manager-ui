import React from "react";
import { LogoutIcon } from "../../img/svg/LogoutIcon";
import { TabItem, TabItemIconOnly } from "./TabIcons";
import { removeAccessToken } from "../../utils/auth";
import "./index.css";

export const ExitBox = ({
  isCollapsed,
  setIsSignedIn,
}: {
  isCollapsed: boolean;
  setIsSignedIn: Function;
}) => {
  const signOut = () => {
    removeAccessToken();
    setIsSignedIn(false);
  };

  return (
    <div className="exit-box-container">
      {!isCollapsed ? (
        <TabItem
          icon={<LogoutIcon />}
          tabName="Thoát"
          isSelected={false}
          onClick={signOut}
        />
      ) : (
        <TabItemIconOnly
          icon={<LogoutIcon />}
          isSelected={false}
          onClick={signOut}
        />
      )}
    </div>
  );
};
