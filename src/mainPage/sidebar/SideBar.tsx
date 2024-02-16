import React from "react";
import { LogoComponent } from "./Logo";
import { TabIcons } from "./TabIcons";
import { ExitBox } from "./ExitBox";

export const SideBar = () => {
  return (
    <div className="side-bar-container">
      <LogoComponent />
      <HorizontalBorderLine customWidth="80%" />
      <TabIcons />
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
