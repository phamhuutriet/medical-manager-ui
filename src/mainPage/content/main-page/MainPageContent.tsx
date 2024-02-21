import React from "react";
import { ContentItemList } from "./ContentItemList";
import { AddPatientButton } from "./AddPatientButton";
import "../index.css";

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
