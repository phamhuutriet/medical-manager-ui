import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { BackIcon } from "../../img/svg/BackIcon";
import { EditRecordPageContent } from "./EditRecordPageContent";
import "./index.css";

export const EditRecordPage = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
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
          Bệnh án
        </div>
      </div>
      <EditRecordPageContent />
    </div>
  );
};
