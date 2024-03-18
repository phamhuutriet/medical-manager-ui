import React from "react";
import { Avatar, Grid, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import "./index.css";
import { getRoutesList } from "../../utils/utils";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import { NotificationIcon } from "../../img/svg/NotificationIcon";

export const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const routeList = getRoutesList(path);
  const navigate = useNavigate();

  return (
    <div className="header-grid-item">
      <div className="header-container">
        <div className="header-route-names">
          <div className="header-route-text-container">
            {routeList.length > 1
              ? routeList.map((routeItem, idx) => {
                  if (idx < routeList.length - 1) {
                    return (
                      <div
                        key={routeItem.routeName}
                        className="header-route-text-non-current-route-container"
                      >
                        <div
                          className="header-route-text-non-current-route"
                          onClick={() => navigate(routeItem.route)}
                        >
                          {routeItem.routeName}
                        </div>
                        <div>&nbsp;/&nbsp;</div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={routeItem.routeName}
                      className="header-route-text-current-route"
                    >
                      {routeItem.routeName}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
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
      <ArrowDropDownIcon />
    </div>
  );
};

const NotificationIconButton = () => {
  return (
    <Grid item>
      <IconButton>
        <NotificationIcon />
      </IconButton>
    </Grid>
  );
};
