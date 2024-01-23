import React from "react";
import { Grid } from "@mui/material";
import { LogoComponent } from "./Logo";
import { TabIcons } from "./TabIcons";

export const SideBar = () => {
  return (
    <Grid
      item
      xs={2}
      sx={{
        fontSize: "30px",
        borderRight: "1px solid #E5E7EB",
        position: "relative",
      }}
    >
      <LogoComponent />
      <HorizontalBorderLine customWidth="80%" />
      <TabIcons />
      <Grid
        item
        xs={12}
        sx={{
          position: "absolute",
          width: "88.88%",
          left: 0,
          right: 0,
          margin: "auto",
          bottom: "3.125%",
          height: "10.7vh",
          background: "orange",
        }}
      >
        Exit
      </Grid>
    </Grid>
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
