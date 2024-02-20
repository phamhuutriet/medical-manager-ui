import React from "react";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../../data/routeEnum";
import { IconButton } from "@mui/material";
import { BackIcon } from "../../img/svg/BackIcon";
import { AddDoctorPageContent } from "../doctor/add-doctor/AddDoctorPageContent";

export const AddPatientPage = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(RouteEnum.MAIN_PAGE);
  };
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
          Thêm bệnh nhân
        </div>
      </div>
      <AddDoctorPageContent />
    </div>
  );
};
