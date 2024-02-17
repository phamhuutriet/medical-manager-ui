import React from "react";
import { IconButton } from "@mui/material";
import { Button } from "../../../components/Button";
import { UploadImage } from "../../../img/svg/UploadImage";

export const AddDoctorAvatarBox = () => {
  return (
    <div className="avatar-text">
      Ảnh đại diện
      <div className="avatar-box">
        <IconButton>
          <UploadImage />
        </IconButton>
        <div className="avatar-buttons">
          <Button text="Tải lên" className="add-doctor-upload-image-button" />
        </div>
        <div
          style={{
            fontSize: "14px",
            fontFamily: "Be Vietnam Pro",
            color: "#8C949D",
          }}
        >
          JPG, GIF, or PNG
        </div>
      </div>
    </div>
  );
};
