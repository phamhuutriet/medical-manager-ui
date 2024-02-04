import React from "react";
import Grid from "@mui/material/Grid";
import { SideBar } from "./sidebar/SideBar";
import { Header } from "./header/Header";
import { MainPageContent } from "./content/MainPageContent";
import "./index.css";

export const MainPage = () => {
  return (
    <div className="app-container">
      <SideBar />
      <div className="second-column">
        <Header />
        <MainPageContent />
      </div>
    </div>
  );
};
