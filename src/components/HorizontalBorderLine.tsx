import React from "react";

export const HorizontalBorderLine = ({
  customWidth,
}: {
  customWidth?: string;
}) => {
  return (
    <div
      style={{
        borderTop: "1px solid #E5EAEE",
        width: customWidth ? customWidth : "100%",
        margin: "0 auto",
      }}
    ></div>
  );
};
