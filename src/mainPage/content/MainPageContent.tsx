import React from "react";
import "./index.css";
import { ContentItemList } from "./ContentItemList";
import { AddPatientButton } from "./AddPatientButton";

export const MainPageContent = () => {
  return (
    <div className="page-content-container">
      <div className="content-header">
        <div>Tổng quan</div>
        <AddPatientButton />
      </div>
      <ContentItemList />
    </div>
  );
};
