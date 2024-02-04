import React, { useState } from "react";
import { FilterIcon } from "../../img/svg/FilterIcon";
import { DropDownMenu, MenuListType } from "./DropDownMenu";
import { ArrowDownIcon } from "../../img/svg/ArrowDownIcon";
import { CalendarIcon } from "../../img/svg/CalendarIcon";

export const FilterButton = ({ onClick }: { onClick: any }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="filter-button"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <div>Lọc</div>
      <FilterIcon
        defaultColor="#0D0C0C"
        selectedColor="#586EE0"
        isSelected={isHover}
      />
    </div>
  );
};

const FILTER_MENU_LIST: MenuListType[] = [
  {
    icon: <ArrowDownIcon defaultColor="#8C949D" selectedColor="black" />,
    text: "Bác sĩ",
  },
  {
    icon: <CalendarIcon defaultColor="#8C949D" selectedColor="black" />,
    text: "Ngày khám",
  },
];

export const FilterButtonMenu = () => {
  return (
    <DropDownMenu
      Button={FilterButton}
      menuList={FILTER_MENU_LIST}
      customStyle={{ width: "560px" }}
    />
  );
};
