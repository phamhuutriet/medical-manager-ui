import React from "react";
import { IconButton } from "@mui/material";
import { BackIcon } from "../../../img/svg/BackIcon";
import { DoctorDetailContent } from "./DoctorDetailContent";
import { useNavigate } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";

export const DoctorDetailPage = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(RouteEnum.DOCTOR_PAGE);
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
          Chi tiết bác sĩ
        </div>
      </div>
      <DoctorDetailContent />
    </div>
  );
};
