import React from "react";
import Grid from "@mui/material/Grid";
import "./index.css";
import { SideBar } from "./sidebar/SideBar";
import { Header } from "./header/Header";
import { MainPageContent } from "./content/MainPageContent";

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
