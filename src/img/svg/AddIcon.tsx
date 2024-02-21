import React from "react";
import { SVGProps } from "./svgData";

export const AddIcon = ({
  defaultColor,
  selectedColor,
  isSelected,
}: SVGProps) => {
  const color = isSelected ? selectedColor : defaultColor;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="add">
        <path
          id="Vector"
          d="M6 12H18"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M12 18V6"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
