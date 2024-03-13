import React, { useState } from "react";
import { LogoComponent } from "./Logo";
import { TabIcons } from "./TabIcons";
import { ExitBox } from "./ExitBox";
import { CollapseButton } from "../../img/svg/CollapseButton";
import { UncollapsedButton } from "../../img/svg/UncollapsedButton";
import { HorizontalBorderLine } from "../../components/HorizontalBorderLine";

export const SideBar = ({ setIsSignedIn }: { setIsSignedIn: Function }) => {
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
      <ExitBox isCollapsed={isCollapsed} setIsSignedIn={setIsSignedIn} />
      <div
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <UncollapsedButton /> : <CollapseButton />}
      </div>
    </div>
  );
};
