import React from "react";
import Grid from "@mui/material/Grid";
import "./index.css";
import { SideBar } from "./sidebar/SideBar";
import { Header } from "./header/Header";

export const MainPage = () => {
  return (
    <div className="app-container">
      <SideBar />
      <div className="second-column">
        <Header />
      </div>
      {/* <Grid item xs={10}>
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
      </Grid> */}
    </div>
  );
};
