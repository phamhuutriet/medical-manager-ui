import * as React from "react";
import { styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 12,
    marginTop: theme.spacing(1),
    width: "327px", // TODO: find a way to parameterize this
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "&": {
        fontSize: 16,
        height: "56px",
        color: "#8C949D",
        gap: "12px",
        fontFamily: "Be Vietnam Pro",
        padding: "16px 20px 16px 20px",
      },
      "& .MuiSvgIcon-root": {
        fontSize: 16,
      },
      "&:hover": {
        color: "#0D0C0C",
        backgroundColor: "#E5E9FA",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#E5E9FA", // Remove the gray background on focus
      },
    },
  },
}));

export type MenuListType = {
  icon: any;
  text: string;
  onClick?: any;
};

interface DropDownButtonProps {
  Button: any;
  menuList: MenuListType[];
  customStyle?: any;
}

export const DropDownMenu = ({
  Button,
  menuList,
  customStyle,
}: DropDownButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isSelectedIdx, setIsSelectedIdx] = React.useState<number>(-1);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseEnter = (idx: number) => {
    setIsSelectedIdx(idx);
  };
  const handleMouseLeave = () => {
    setIsSelectedIdx(-1);
  };

  return (
    <div>
      <Button onClick={handleClick} isClicked={anchorEl !== null} />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={customStyle ? customStyle : {}}
      >
        {menuList.map((menuItem: MenuListType, index: number) => (
          <MenuItem
            onClick={() => {
              handleClose();
              if (menuItem.onClick) {
                menuItem.onClick();
              }
            }}
            disableRipple
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {React.cloneElement(menuItem.icon, {
              isSelected: index === isSelectedIdx,
            })}
            {menuItem.text}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};
