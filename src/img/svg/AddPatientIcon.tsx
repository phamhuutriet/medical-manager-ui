import React from "react";
import { SVGProps } from "./svgData";

export const AddPatientIcon = ({
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
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M16.5 21.5V17.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M11.99 21.8097C10.17 21.8097 8.36004 21.3497 6.98004 20.4297C4.56004 18.8097 4.56004 16.1697 6.98004 14.5597C9.73004 12.7197 14.24 12.7197 16.99 14.5597"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
