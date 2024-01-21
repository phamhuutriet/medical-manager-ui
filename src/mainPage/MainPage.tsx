import React from "react";
import Grid from "@mui/material/Grid";
import "./index.css";

export const MainPage = () => {
  return (
    <Grid container className="fullDiv">
      <Grid item xs={2} sx={{ background: "#90EE90", fontSize: "70px" }}>
        Sidebar
      </Grid>
      <Grid item xs={10} sx={{ background: "#C8A2C8" }}>
        <Grid item xs={12} sx={{ background: "orange", height: "7.8125%" }}>
          Header
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: "92.1875%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              height: "94%",
              width: "96.5%",
              background: "#FFFFE0",
            }}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
