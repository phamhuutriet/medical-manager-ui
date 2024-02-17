import React, { useState } from "react";
import { LogoComponent } from "./Logo";
import { TabIcons } from "./TabIcons";
import { ExitBox } from "./ExitBox";
import { CollapseButton } from "../../img/svg/CollapseButton";
import { UncollapsedButton } from "../../img/svg/UncollapsedButton";

export const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`side-bar-container ${
        isCollapsed && "side-bar-container-collapsed"
      }`}
    >
      <LogoComponent isCollapsed={isCollapsed} />
      <HorizontalBorderLine customWidth="80%" />
      <TabIcons isCollapsed={isCollapsed} />
      <ExitBox isCollapsed={isCollapsed} />
      <div
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <UncollapsedButton /> : <CollapseButton />}
      </div>
    </div>
  );
};

const HorizontalBorderLine = ({ customWidth }: { customWidth?: string }) => {
  return (
    <div
      style={{
        borderTop: "2px solid #E5E7EB",
        width: customWidth ? customWidth : "100%",
        margin: "0 auto",
      }}
    ></div>
  );
};
