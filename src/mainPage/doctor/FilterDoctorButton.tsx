import React, { useEffect, useState } from "react";
import { FilterIcon } from "../../img/svg/FilterIcon";
import { DropDownMenu, MenuListType } from "../content/main-page/DropDownMenu";

export const FilterButton = ({
  onClick,
  isClicked,
}: {
  onClick: any;
  isClicked: boolean;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isInnerClicked, setIsClicked] = useState(isClicked);

  useEffect(() => {
    setIsClicked(isClicked);
  }, [isClicked]);

  const onClickButton = (event: any) => {
    onClick(event);
    setIsClicked(true);
  };

  return (
    <div
      className={`filter-button ${isInnerClicked && "filter-button-clicked"}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClickButton}
    >
      <div>Lọc</div>
      <FilterIcon
        defaultColor="#0D0C0C"
        selectedColor="#586EE0"
        isSelected={isHover || isInnerClicked}
      />
    </div>
  );
};

const FILTER_MENU_LIST: MenuListType[] = [
  {
    icon: <></>,
    text: "Mã số",
  },
  {
    icon: <></>,
    text: "Số điện thoại",
  },
];

export const FilterDoctorButtonMenu = () => {
  return (
    <DropDownMenu
      Button={FilterButton}
      menuList={FILTER_MENU_LIST}
      customStyle={{ width: "560px" }}
    />
  );
};
