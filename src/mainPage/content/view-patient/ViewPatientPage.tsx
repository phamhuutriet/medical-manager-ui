import React from "react";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../../../data/routeEnum";
import { IconButton } from "@mui/material";
import { BackIcon } from "../../../img/svg/BackIcon";
import { ViewPatientAddTemplateButton } from "./ViewPatientAddButton";

export const ViewPatientPage = () => {
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
          Thông tin bệnh nhân
        </div>
        <ViewPatientAddTemplateButton />
      </div>
    </div>
  );
};
