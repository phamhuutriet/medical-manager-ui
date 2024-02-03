import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick?: any;
  text?: string;
  icon?: any;
  className?: string;
  innerButtonClassName?: string;
  children?: React.ReactNode;
  disable?: boolean; // TODO: add disable attr
}

export const Button = ({
  onClick,
  text,
  icon,
  className,
  innerButtonClassName,
  children,
}: ButtonProps) => {
  return (
    <div className={`button-container ${className}`} onClick={onClick}>
      <div className={`button-inner ${innerButtonClassName}`}>
        <div>{text}</div>
        {children}
        <div>{icon}</div>
      </div>
    </div>
  );
};
