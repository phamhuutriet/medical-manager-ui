import React from "react";
import "./index.css";
import { ContentItemList } from "./ContentItemList";
import { DropDownMenu, MenuListType } from "./DropDownMenu";
import { ArrowDownIcon } from "../../img/svg/ArrowDownIcon";
import { AddDoctorIcon } from "../../img/svg/AddDoctorIcon";
import { AddPatientIcon } from "../../img/svg/AddPatientIcon";

const MENU_LIST: MenuListType[] = [
  {
    icon: <AddDoctorIcon defaultColor="#8C949D" selectedColor="#0D0C0C" />,
    text: "Thêm bác sĩ",
  },
  {
    icon: <AddPatientIcon defaultColor="#8C949D" selectedColor="#0D0C0C" />,
    text: "Thêm bệnh nhân",
  },
];

export const MainPageContent = () => {
  return (
    <div className="page-content-container">
      <div className="content-header">
        <div>Tổng quan</div>
        <DropDownMenu menuList={MENU_LIST} Button={AddButton} />
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
        <ArrowDownIcon />
      </div>
    </div>
  );
};
