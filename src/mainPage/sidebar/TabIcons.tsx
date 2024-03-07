import React, { useState } from "react";
import { HomeIcon } from "../../img/svg/HomeIcon";
import "./index.css";
import { DoctorIcon } from "../../img/svg/DoctorIcon";
import { useLocation, useNavigate } from "react-router";
import { RouteEnum } from "../../data/routeEnum";

// MUST SORT BY ROUTE LENGTH -> matching route and tab icon
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

export const TabIcons = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let itemIdx;

  for (let i = 0; i < TAB_LIST.length; i++) {
    const item = TAB_LIST[i];
    if (location.pathname.includes(item.route)) {
      itemIdx = i;
    }
  }

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
        {TAB_LIST.map((tabItem, idx) => {
          return !isCollapsed ? (
            <TabItem
              isSelected={idx === selectedItemIdx}
              key={tabItem.route}
              icon={tabItem.icon}
              tabName={tabItem.tabName}
              onClick={() => onClickTabItem(idx, tabItem.route)}
            />
          ) : (
            <TabItemIconOnly
              isSelected={idx === selectedItemIdx}
              key={tabItem.route}
              icon={tabItem.icon}
              onClick={() => onClickTabItem(idx, tabItem.route)}
            />
          );
        })}
      </div>
    </div>
  );
};

export const TabItem = ({
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
        {
          // TODO: refactor this into render props
          React.cloneElement(icon, {
            isSelected: isHovered || isSelected,
          })
        }
        <div className="tab-icon-text">{tabName}</div>
      </div>
    </div>
  );
};

export const TabItemIconOnly = ({
  icon,
  isSelected,
  onClick,
}: {
  icon: any;
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
      className={`tab-item-collapsed ${isSelected ? "tab-item-selected" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        isSelected: isHovered || isSelected,
      })}
    </div>
  );
};
