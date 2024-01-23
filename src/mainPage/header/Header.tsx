import React from "react";
import { Avatar, Grid, IconButton } from "@mui/material";
import NotificationIcon from "../../img/notification.svg";
import DropDownIcon from "../../img/dropdown.svg";

export const Header = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        height: "7.8125vh",
        paddingTop: "1px",
        paddingBottom: "1px",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div
        style={{
          width: "95.83%",
          marginLeft: "auto",
          marginRight: "auto",
          background: "white",
          marginTop: "1.171875vh",
          marginBottom: "1.171875vh",
          height: "5.46875vh",
        }}
      >
        <div
          style={{
            marginLeft: "80%",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
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
    <Grid
      item
      xs={8.58}
      sx={{
        // background: "yellow",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "6.55%",
        display: "flex",
      }}
    >
      <IconButton sx={{ p: 0, marginLeft: "4.37%" }}>
        <Avatar />
      </IconButton>
      <div style={{ fontSize: "1.5625vh", fontFamily: "Be Vietnam Pro" }}>
        Triet Pham
      </div>
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
