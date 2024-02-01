import React from "react";
import "./index.css";
import { ContentItemList } from "./ContentItemList";
import { DropDownButton, MenuListType } from "./DropDownButton";
import ArrowDownIcon from "../../img/arrow-down.svg";
import AddDoctor from "../../img/profile-add.svg";
import AddPatient from "../../img/add-patient.svg";

const MENU_LIST: MenuListType[] = [
  {
    icon: AddDoctor,
    text: "Thêm bác sĩ",
  },
  {
    icon: AddPatient,
    text: "Thêm bệnh nhân",
  },
];

export const MainPageContent = () => {
  return (
    <div className="page-content-container">
      <div className="content-header">
        <div>Tổng quan</div>
        <DropDownButton menuList={MENU_LIST} Button={AddButton} />
      </div>
      <ContentItemList />
    </div>
  );
};

const AddButton = ({ onClick }: { onClick: any }) => {
  return (
    <div className="button-container" onClick={onClick}>
      <div className="button-inner">
        <div>Thêm</div>
        <img className="img" alt="dropdown" src={ArrowDownIcon} />
      </div>
    </div>
  );
};
