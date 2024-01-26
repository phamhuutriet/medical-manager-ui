import React from "react";
import { Grid } from "@mui/material";
import { LogoComponent } from "./Logo";
import { TabIcons } from "./TabIcons";
import { ExitBox } from "./ExitBox";

export const SideBar = () => {
  return (
    <div
      style={{
        fontSize: "30px",
        borderRight: "1px solid #E5E7EB",
        position: "relative",
        width: "288px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#ff6666",
      }}
    >
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
        borderTop: "1px solid #E5E7EB",
        width: customWidth ? customWidth : "100%",
        margin: "0 auto",
      }}
    ></div>
  );
};
