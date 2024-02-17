import React from "react";
import { LogoutIcon } from "../../img/svg/LogoutIcon";
import { TabItem, TabItemIconOnly } from "./TabIcons";
import "./index.css";

export const ExitBox = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <div className="exit-box-container">
      {!isCollapsed ? (
        <TabItem
          icon={<LogoutIcon />}
          tabName="Thoát"
          isSelected={false}
          onClick={() => {}}
        />
      ) : (
        <TabItemIconOnly
          icon={<LogoutIcon />}
          isSelected={false}
          onClick={() => {}}
        />
      )}
    </div>
  );
};
