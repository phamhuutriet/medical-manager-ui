import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { EditAvatarIcon } from "../../../img/svg/EditAvatarIcon";
import { RemoveAvatarIcon } from "../../../img/svg/RemoveAvatarIcon";

export const AvatarBox = () => {
  return (
    <div className="avatar-text">
      Ảnh đại diện
      <div className="avatar-box">
        <Avatar sx={{ height: "64px", width: "64px", borderRadius: "16px" }} />
        <div className="avatar-buttons">
          <IconButton
            sx={{ border: "1px solid #586EE0", borderRadius: "14px" }}
          >
            <EditAvatarIcon />
          </IconButton>
          <IconButton
            sx={{ border: "1px solid #E05858", borderRadius: "14px" }}
          >
            <RemoveAvatarIcon />
          </IconButton>
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
