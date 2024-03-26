import React, { useState } from "react";
import { LogoComponent } from "./Logo";
import { TabIcons } from "./TabIcons";
import { ExitBox } from "./ExitBox";
import { CollapseButton } from "../../img/svg/CollapseButton";
import { UncollapsedButton } from "../../img/svg/UncollapsedButton";
import { HorizontalBorderLine } from "../../components/HorizontalBorderLine";
import { CollapsedButton, SideBarContainer } from "./Styles";
import "./index.css";

export const SideBar = ({ setIsSignedIn }: { setIsSignedIn: Function }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SideBarContainer className={`${isCollapsed && "is-collapsed"}`}>
      <LogoComponent isCollapsed={isCollapsed} />
      <HorizontalBorderLine customWidth="80%" />
      <TabIcons isCollapsed={isCollapsed} />
      <ExitBox isCollapsed={isCollapsed} setIsSignedIn={setIsSignedIn} />
      <CollapsedButton onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? <UncollapsedButton /> : <CollapseButton />}
      </CollapsedButton>
    </SideBarContainer>
  );
};
