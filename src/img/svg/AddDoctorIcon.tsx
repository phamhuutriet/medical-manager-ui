import React from "react";
import { SVGProps } from "./svgData";

export const AddDoctorIcon = ({
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
      <g id="profile-add">
        <path
          id="Vector"
          d="M18.5 19.5H14.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M16.5 21.5V17.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M7.55995 6.43999C7.55995 8.83998 9.44992 10.79 11.8299 10.87C11.9399 10.86 12.0599 10.86 12.1599 10.87C14.5298 10.79 16.4298 8.83998 16.4298 6.43999M7.55995 6.43999C5.99993 2.00001 9.55004 2 12 2C14.45 2 17.9997 2.00001 16.4298 6.43999M7.55995 6.43999H16.4298"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          d="M11.99 21.8097C10.17 21.8097 8.36004 21.3497 6.98004 20.4297C4.56004 18.8097 4.56004 16.1697 6.98004 14.5597C7.58145 14.1573 8.26705 13.8429 9 13.6165M16.99 14.5597C16.3886 14.1573 15.703 13.8429 14.9701 13.6165M9 13.6165L11.99 15.9997L14.9701 13.6165M9 13.6165C10.8856 13.0341 13.0845 13.0341 14.9701 13.6165"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
