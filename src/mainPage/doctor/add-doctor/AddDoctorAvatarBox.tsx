import React from "react";
import { Avatar } from "@mui/material";
import { Button } from "../../../components/Button";

export const AddDoctorAvatarBox = () => {
  return (
    <div className="avatar-text">
      Ảnh đại diện
      <div className="avatar-box">
        <Avatar sx={{ height: "64px", width: "64px", borderRadius: "16px" }} />
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
