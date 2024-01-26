import React from "react";
import { Avatar, Grid, IconButton } from "@mui/material";
import NotificationIcon from "../../img/notification.svg";
import DropDownIcon from "../../img/dropdown.svg";
import "./index.css";

export const Header = () => {
  return (
    <div className="header-grid-item">
      <div className="header-container">
        <div className="header-inner">
          <NotificationIconButton />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

const UserMenu = () => {
  return (
    <div className="user-menu">
      <IconButton sx={{ p: 0, marginLeft: "4.37%" }}>
        <Avatar />
      </IconButton>
      <div className="text">Triet Pham</div>
      <img className="img" alt="dropdown-icon" src={DropDownIcon} />
    </div>
  );
};

const NotificationIconButton = () => {
  return (
    <Grid item>
      <IconButton>
        <img className="img" alt="notification-icon" src={NotificationIcon} />
      </IconButton>
    </Grid>
  );
};
