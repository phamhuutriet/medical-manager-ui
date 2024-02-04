import React from "react";
import { SVGProps } from "./svgData";

export const DoctorIcon = ({
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
      <g id="profile">
        <path
          id="Vector"
          d="M7.55999 6.43999C7.55999 8.83998 9.44995 10.79 11.8299 10.87C11.9399 10.86 12.0599 10.86 12.1599 10.87C14.5299 10.79 16.4298 8.83998 16.4298 6.43999M7.55999 6.43999C5.99996 2.00001 9.55007 2 12 2C14.45 2 17.9998 2.00001 16.4298 6.43999M7.55999 6.43999H16.4298"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M9 13.6809C8.33535 13.9006 7.7126 14.1936 7.16 14.56C4.74 16.18 4.74 18.82 7.16 20.43C9.91 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C16.6214 14.1936 16.0019 13.9006 15.3396 13.6809M9 13.6809L12.5 16L15.3396 13.6809M9 13.6809C10.9904 13.023 13.3564 13.023 15.3396 13.6809"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
