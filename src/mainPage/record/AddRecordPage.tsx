import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { BackIcon } from "../../img/svg/BackIcon";
import "./index.css";
import { AddRecordPageContent } from "./AddRecordPageContent";

export const AddRecordPage = () => {
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
      <AddRecordPageContent />
    </div>
  );
};
