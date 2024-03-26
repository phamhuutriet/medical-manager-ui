import React, { useState } from "react";
import { HomeIcon } from "../../img/svg/HomeIcon";
import { DoctorIcon } from "../../img/svg/DoctorIcon";
import { useLocation } from "react-router";
import { RouteEnum } from "../../data/routeEnum";
import { NavLink } from "react-router-dom";
import { LinkItem, LinkText, TabItemsContainer } from "./Styles";

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
  return (
    <TabItemsContainer>
      {TAB_LIST.map((tabItem, idx) => {
        return (
          <TabItem
            key={tabItem.route}
            icon={tabItem.icon}
            tabName={tabItem.tabName}
            path={tabItem.route}
            isCollapsed={isCollapsed}
            as={NavLink}
          />
        );
      })}
    </TabItemsContainer>
  );
};

export const TabItem = ({
  icon,
  tabName,
  path,
  isCollapsed,
  as,
  onClick,
}: {
  icon: any;
  tabName: string;
  path: string;
  isCollapsed?: boolean;
  as?: any;
  onClick?: any;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isSelected = location.pathname === path;

  return (
    <LinkItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={path}
      as={as}
      onClick={onClick ? onClick : () => {}}
      className={isCollapsed ? "is-collapsed" : ""}
    >
      {React.cloneElement(icon, {
        isSelected: isHovered || isSelected,
      })}
      {!isCollapsed && <LinkText>{tabName}</LinkText>}
    </LinkItem>
  );
};
