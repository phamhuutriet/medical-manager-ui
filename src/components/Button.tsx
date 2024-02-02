import React from "react";

interface ButtonProps {
  onClick: any;
  text: string;
  icon?: any;
  className?: string;
}

export const Button = ({ onClick, text, icon, className }: ButtonProps) => {
  return (
    <div className={`button-container ${className}`} onClick={onClick}>
      <div className="button-inner">
        <div>{text}</div>
        {icon}
      </div>
    </div>
  );
};
