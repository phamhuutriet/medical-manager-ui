import React from "react";

export const CloseIcon = ({
  width,
  height,
  color,
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg
      width={width ? width : "34"}
      height={height ? height : "34"}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Close">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2271 21.7725C11.9342 21.4796 11.9342 21.0048 12.2271 20.7119L20.7124 12.2266C21.0053 11.9337 21.4802 11.9337 21.773 12.2266C22.0659 12.5195 22.0659 12.9943 21.773 13.2872L13.2878 21.7725C12.9949 22.0654 12.52 22.0654 12.2271 21.7725Z"
          fill={color ? color : "#0D0C0C"}
        />
        <path
          id="Vector (Stroke)_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2271 12.2275C12.52 11.9346 12.9949 11.9346 13.2878 12.2275L21.773 20.7128C22.0659 21.0057 22.0659 21.4805 21.773 21.7734C21.4802 22.0663 21.0053 22.0663 20.7124 21.7734L12.2271 13.2881C11.9342 12.9952 11.9342 12.5204 12.2271 12.2275Z"
          fill={color ? color : "#0D0C0C"}
        />
      </g>
    </svg>
  );
};
