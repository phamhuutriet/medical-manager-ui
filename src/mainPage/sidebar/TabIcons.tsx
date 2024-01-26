import React, { useState } from "react";
import { Grid } from "@mui/material";
import HomeIcon from "../../img/home.svg";
import DoctorIcon from "../../img/profile.svg";
import "./index.css";

const TAB_LIST = [
  { icon: HomeIcon, tabName: "Tổng quan" },
  { icon: DoctorIcon, tabName: "Bác sĩ" },
  { icon: DoctorIcon, tabName: "Bác sĩ" },
];

export const TabIcons = () => {
  return (
    <div
      style={{
        marginTop: "36px",
        marginLeft: "16px",
        marginRight: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5625vh",
        }}
      >
        {TAB_LIST.map((tabItem, idx) => (
          <TabItem
            isSelected={idx === 0}
            key={idx}
            icon={tabItem.icon}
            tabName={tabItem.tabName}
          />
        ))}
      </div>
    </div>
  );
};

const TabItem = ({
  icon,
  tabName,
  isSelected,
}: {
  icon: any;
  tabName: string;
  isSelected?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerClassName =
    isSelected || isHovered
      ? "tab-item-container-selected"
      : "tab-item-container-non-selected";

  return (
    <div
      className={containerClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tab-item-inner">
        <img className="img" alt="logo" src={icon} class="img" />
        <div className="tab-icon-text">{tabName}</div>
      </div>
    </div>
  );
};
