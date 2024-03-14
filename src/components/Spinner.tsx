import React from "react";
import "./Spinner.css";

interface SpinnerProps {
  size?: number;
  color?: string;
}

export const Spinner = ({ size, color }: SpinnerProps) => {
  return (
    <div
      className="spinner"
      //   style={{ width: size, height: size, borderColor: color }}
    />
  );
};
