import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { BackIcon } from "../../../img/svg/BackIcon";
import { SectionContext } from "../../../context/SectionContext";
import { SectionId } from "../../../data/sectionIdEnum";
import { DoctorDetailContent } from "./DoctorDetailContent";

export const DoctorDetailPage = () => {
  const { setSectionId } = useContext(SectionContext);

  const onClickBack = () => {
    setSectionId(SectionId.DOCTOR_LIST_PAGE);
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
