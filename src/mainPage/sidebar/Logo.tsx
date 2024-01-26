import React from "react";
import { Grid } from "@mui/material";
import Logo from "../../img/logo.png";

export const LogoComponent = () => {
  return (
    <div
      style={{
        height: "110px",
        marginLeft: "24px",
        marginRight: "24px",
        marginBottom: "24px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        className="img"
        alt="logo"
        src={Logo}
        style={{
          height: "64px",
          width: "152px",
        }}
      />
    </div>
  );
};
