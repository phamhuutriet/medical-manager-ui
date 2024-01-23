import React from "react";
import LogoutIcon from "../../img/logout.svg";
import { Grid } from "@mui/material";
import "./index.css";

export const ExitBox = () => {
  return (
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
      }}
    >
      <div className="exit-box">
        <div className="tab-item-inner">
          <img className="img" alt="logo" src={LogoutIcon} />
          <div className="tab-icon-text">Thoát</div>
        </div>
      </div>
    </Grid>
  );
};
