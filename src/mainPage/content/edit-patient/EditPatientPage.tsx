import React from "react";
import { IconButton } from "@mui/material";
import { RouteEnum } from "../../../data/routeEnum";
import { useNavigate } from "react-router";
import { BackIcon } from "../../../img/svg/BackIcon";
import { EditPatientContent } from "./EditPatientContent";

export const EditPatientPage = () => {
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
          Chi tiết bệnh nhân
        </div>
      </div>
      <EditPatientContent />
    </div>
  );
};
