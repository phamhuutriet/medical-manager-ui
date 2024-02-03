import React from "react";
import { SVGProps } from "./svgData";

export const ArrowRightIcon = ({
  defaultColor,
  selectedColor,
  isSelected,
}: SVGProps) => {
  const color = isSelected ? selectedColor : defaultColor;

  return (
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-right">
        <path
          id="Vector (Stroke)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.983107 0.957961C1.22718 0.713883 1.62291 0.713883 1.86699 0.957961L7.30032 6.39129C8.18607 7.27704 8.18607 8.72277 7.30032 9.60851L1.86699 15.0418C1.62291 15.2859 1.22718 15.2859 0.983107 15.0418C0.739029 14.7978 0.739029 14.402 0.983107 14.158L6.41644 8.72463C6.81403 8.32704 6.81403 7.67277 6.41644 7.27518L0.983107 1.84184C0.739029 1.59777 0.739029 1.20204 0.983107 0.957961Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
