import * as React from "react";
import { styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { ArrowDownIcon } from "../../../img/svg/ArrowDownIcon";

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

enum SexText {
  MALE = "Nam",
  FEMALE = "Nữ",
}

enum SexOption {
  MALE = "Male",
  FEMALE = "Female",
}

export const SexDropDown = React.memo(
  ({ sex, setSex }: { sex: string; setSex: Function }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const selectedOption =
      sex === SexOption.MALE ? SexText.MALE : SexText.FEMALE;
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClickOption = (option: any) => {
      setSex(option);
      handleClose();
    };

    console.log("render sex drop down");

    return (
      <div className="box">
        <div className="box-item">
          <div className="title">Giới tính</div>
          <div className="content">
            {sex ? (
              <div style={{ width: "100%" }}>{selectedOption}</div>
            ) : (
              <div style={{ width: "100%", color: "#8C949D" }}>
                Chọn giới tính
              </div>
            )}

            <IconButton sx={{ height: "100%" }} onClick={handleClick}>
              <ArrowDownIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
            </IconButton>
          </div>
        </div>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => handleClickOption(SexOption.MALE)}
            disableRipple
          >
            {SexText.MALE}
          </MenuItem>
          <MenuItem
            onClick={() => handleClickOption(SexOption.FEMALE)}
            disableRipple
          >
            {SexText.FEMALE}
          </MenuItem>
        </StyledMenu>
      </div>
    );
  }
);
