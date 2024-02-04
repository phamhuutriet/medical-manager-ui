import React from "react";
import { SVGProps } from "./svgData";

export const CalendarIcon = ({
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
      <g id="calendar">
        <path
          id="Vector"
          d="M8 2V5"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M16 2V5"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M3.5 9.09009H20.5"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_5"
          d="M15.6947 13.7H15.7037"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_6"
          d="M15.6947 16.7H15.7037"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_7"
          d="M11.9955 13.7H12.0045"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_8"
          d="M11.9955 16.7H12.0045"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_9"
          d="M8.29431 13.7H8.30329"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_10"
          d="M8.29431 16.7H8.30329"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
