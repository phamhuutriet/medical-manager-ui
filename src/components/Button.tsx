import React, { useEffect, useState } from "react";
import "./Button.css";

interface ButtonProps {
  onClick?: any;
  text?: string;
  icon?: any;
  className?: string;
  innerButtonClassName?: string;
  children?: React.ReactNode;
  disable?: boolean; // TODO: add disable attr
  isClicked?: boolean;
}

export const Button = ({
  onClick,
  text,
  icon,
  className,
  innerButtonClassName,
  children,
  disable,
  isClicked,
}: ButtonProps) => {
  const [isInnerClicked, setIsClicked] = useState(isClicked);

  const onClickButton = (event: any) => {
    onClick(event);
    // setIsClicked(true);
  };

  useEffect(() => {
    setIsClicked(isClicked);
  }, [isClicked]);

  return (
    <div
      className={`button-container ${className} ${
        isInnerClicked && "button-container-clicked"
      } ${disable && "button-disable"}`}
      onClick={!disable ? onClickButton : () => {}}
    >
      <div className={`button-inner ${innerButtonClassName}`}>
        <div style={{ display: "flex", alignItems: "center" }}>{text}</div>
        {children}
        <div style={{ display: "flex", alignItems: "center" }}>{icon}</div>
      </div>
    </div>
  );
};
