import React from "react";
import { Avatar, Grid, IconButton } from "@mui/material";
import NotificationIcon from "../../img/notification.svg";
import DropDownIcon from "../../img/dropdown.svg";
import "./index.css";

export const Header = () => {
  return (
    <Grid item xs={12} className="header-grid-item">
      <div className="header-container">
        <div className="header-inner">
          <Grid container>
            <NotificationIconButton />
            <Grid item xs={1.5}></Grid>
            <VerticalLine />
            <UserMenu />
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

const UserMenu = () => {
  return (
    <Grid item xs={8.58} className="user-menu">
      <IconButton sx={{ p: 0, marginLeft: "4.37%" }}>
        <Avatar />
      </IconButton>
      <div className="text">Triet Pham</div>
      <img className="img" alt="dropdown-icon" src={DropDownIcon} />
    </Grid>
  );
};

const VerticalLine = () => {
  return (
    <div
      style={{
        borderLeft: "2px solid #E5E7EB",
      }}
    />
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
