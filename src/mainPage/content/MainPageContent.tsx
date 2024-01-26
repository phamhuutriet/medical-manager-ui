import React from "react";
import "./index.css";
import ArrowDownIcon from "../../img/arrow-down.svg";
import { ContentItemList } from "./ContentItemList";

export const MainPageContent = () => {
  return (
    <div className="page-content-container">
      <div className="content-header">
        <div>Tổng quan</div>
        <AddButton />
      </div>
      <ContentItemList />
    </div>
  );
};

const AddButton = () => {
  return (
    <div className="button-container">
      <div className="button-inner">
        <div>Thêm</div>
        <img className="img" alt="dropdown" src={ArrowDownIcon} />
      </div>
    </div>
  );
};
