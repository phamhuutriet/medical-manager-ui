import React from "react";
import { LogoutIcon } from "../../img/svg/LogoutIcon";
import { TabItem } from "./TabIcons";
import { removeAccessToken } from "../../utils/auth";
import { ExitBoxContainer } from "./Styles";

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
    <ExitBoxContainer>
      <TabItem
        icon={<LogoutIcon />}
        tabName="Thoát"
        path="exit"
        onClick={signOut}
        isCollapsed={isCollapsed}
      />
    </ExitBoxContainer>
  );
};
