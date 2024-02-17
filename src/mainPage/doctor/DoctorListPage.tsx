import React from "react";
import { DoctorItemList } from "./DoctorItemList";
import { AddDoctorButton } from "./AddDoctorButton";

export const DoctorListPage = () => {
  return (
    <div className="page-content-container">
      <div className="content-header">
        <div>Danh sách bác sĩ</div>
        <AddDoctorButton />
      </div>
      <DoctorItemList />
    </div>
  );
};
