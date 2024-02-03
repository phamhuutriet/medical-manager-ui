import React from "react";
import { SVGProps } from "./svgData";

export const ArrowLeftIcon = ({
  defaultColor,
  selectedColor,
  isSelected,
}: SVGProps) => {
  const color = isSelected ? selectedColor : defaultColor;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-left">
        <path
          id="Vector (Stroke)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9419 2.95796C13.186 3.20204 13.186 3.59777 12.9419 3.84184L7.50858 9.27518C7.11099 9.67277 7.11099 10.327 7.50858 10.7246L12.9419 16.158C13.186 16.402 13.186 16.7978 12.9419 17.0418C12.6978 17.2859 12.3021 17.2859 12.058 17.0418L6.6247 11.6085C5.73895 10.7228 5.73895 9.27704 6.6247 8.39129L12.058 2.95796C12.3021 2.71388 12.6978 2.71388 12.9419 2.95796Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
