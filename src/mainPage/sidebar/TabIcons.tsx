import React, { useState } from "react";
import { HomeIcon } from "../../img/svg/HomeIcon";
import "./index.css";
import { DoctorIcon } from "../../img/svg/DoctorIcon";
import { useLocation, useNavigate } from "react-router";
import { RouteEnum } from "../../data/routeEnum";

const TAB_LIST = [
  {
    icon: <HomeIcon defaultColor="#A5A7AF" selectedColor="#3D57DB" />,
    tabName: "Tổng quan",
    route: RouteEnum.MAIN_PAGE,
  },
  {
    icon: <DoctorIcon defaultColor="#A5A7AF" selectedColor="#3D57DB" />,
    tabName: "Bác sĩ",
    route: RouteEnum.DOCTOR_PAGE,
  },
];

export const TabIcons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const itemIdx = TAB_LIST.findIndex(
    (item) => item.route === location.pathname
  );
  const [selectedItemIdx, setSelectedItemIdx] = useState(itemIdx ? itemIdx : 0);

  const onClickTabItem = (idx: number, route: RouteEnum) => {
    setSelectedItemIdx(idx);
    navigate(route);
  };

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
            isSelected={idx === selectedItemIdx}
            key={tabItem.route}
            icon={tabItem.icon}
            tabName={tabItem.tabName}
            onClick={() => onClickTabItem(idx, tabItem.route)}
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
  onClick,
}: {
  icon: any;
  tabName: string;
  isSelected?: boolean;
  onClick: any;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`tab-item-container ${isSelected ? "tab-item-selected" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="tab-item-inner">
        {React.cloneElement(icon, {
          isSelected: isHovered || isSelected,
        })}
        <div className="tab-icon-text">{tabName}</div>
      </div>
    </div>
  );
};
