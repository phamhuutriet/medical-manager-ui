import React from "react";
import { LogoComponent } from "./Logo";
import { TabIcons } from "./TabIcons";
import { ExitBox } from "./ExitBox";

export const SideBar = ({ setSectionId }: { setSectionId: Function }) => {
  return (
    <div className="side-bar-container">
      <LogoComponent />
      <HorizontalBorderLine customWidth="80%" />
      <TabIcons setSectionId={setSectionId} />
      <ExitBox />
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
