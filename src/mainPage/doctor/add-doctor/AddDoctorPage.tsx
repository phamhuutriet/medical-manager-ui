import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import { BackIcon } from "../../../img/svg/BackIcon";
import { AddDoctorPageContent } from "./AddDoctorPageContent";

export const AddDoctorPage = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(RouteEnum.DOCTOR_PAGE);
  };

  console.log("Render add doctor page");

  return (
    <div className="page-content-container">
      <div className="content-header">
        <div>
          <IconButton
            onClick={onClickBack}
            sx={{ height: "100%", borderRight: "8px" }}
          >
            <BackIcon />
          </IconButton>
          Thêm bác sĩ
        </div>
      </div>
      <AddDoctorPageContent />
    </div>
  );
};
