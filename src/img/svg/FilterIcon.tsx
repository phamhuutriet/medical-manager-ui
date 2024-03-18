import React from "react";
import { SVGProps } from "./svgData";

export const FilterIcon = ({
  defaultColor,
  selectedColor,
  isSelected,
}: SVGProps) => {
  const color = isSelected ? selectedColor : defaultColor;

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="setting-4">
        <path
          id="Vector"
          d="M14.666 4.33325H10.666"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M4.00065 4.33325H1.33398"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M6.66732 6.66667C7.95598 6.66667 9.00065 5.622 9.00065 4.33333C9.00065 3.04467 7.95598 2 6.66732 2C5.37865 2 4.33398 3.04467 4.33398 4.33333C4.33398 5.622 5.37865 6.66667 6.66732 6.66667Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M14.6667 11.6667H12"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M5.33398 11.6667H1.33398"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_6"
          d="M9.33333 13.9999C10.622 13.9999 11.6667 12.9552 11.6667 11.6666C11.6667 10.3779 10.622 9.33325 9.33333 9.33325C8.04467 9.33325 7 10.3779 7 11.6666C7 12.9552 8.04467 13.9999 9.33333 13.9999Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
