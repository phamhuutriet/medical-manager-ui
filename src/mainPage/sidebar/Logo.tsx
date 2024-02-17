import React from "react";
import Logo from "../../img/logo.png";

export const LogoComponent = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return !isCollapsed ? (
    <div
      style={{
        height: "110px",
        marginLeft: "24px",
        marginRight: "24px",
        marginBottom: "24px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        className="img"
        alt="logo"
        src={Logo}
        style={{
          height: "64px",
          width: "152px",
        }}
      />
    </div>
  ) : (
    <div
      style={{
        height: "110px",
        marginBottom: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="img"
        alt="logo"
        src={Logo}
        style={{
          height: "24px",
          width: "57px",
        }}
      />
    </div>
  );
};
