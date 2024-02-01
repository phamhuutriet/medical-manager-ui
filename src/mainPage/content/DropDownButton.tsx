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
    width: "327px",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
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
    },
  },
}));

export type MenuListType = {
  icon: any;
  text: string;
};

interface DropDownButtonProps {
  Button: any;
  menuList: MenuListType[];
}

export const DropDownButton = ({ Button, menuList }: DropDownButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuList.map((menuItem: MenuListType) => (
          <MenuItem onClick={handleClose} disableRipple>
            <img alt="add-doctor" src={menuItem.icon} />
            {menuItem.text}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};
