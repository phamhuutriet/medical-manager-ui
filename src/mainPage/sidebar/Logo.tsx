import React from "react";
import { Grid } from "@mui/material";
import Logo from "../../img/logo.png";

export const LogoComponent = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        height: "10.7vh",
        marginBottom: "2.34vh",
        width: "83.33%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <img
        className="img"
        alt="logo"
        src={Logo}
        style={{
          marginTop: "2.24vh",
          marginBottom: "2.24vh",
          height: "5.85vh",
          width: "63.33%",
        }}
      />
    </Grid>
  );
};
