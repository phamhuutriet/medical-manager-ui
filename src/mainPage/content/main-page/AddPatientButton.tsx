import * as React from "react";
import { styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RouteEnum } from "../../../data/routeEnum";
import { Button } from "../../../components/Button";
import { ArrowDownIcon } from "../../../img/svg/ArrowDownIcon";
import { AddDoctorIcon } from "../../../img/svg/AddDoctorIcon";
import { AddPatientIcon } from "../../../img/svg/AddPatientIcon";
import { NavLink } from "react-router-dom";

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

const AddButton = ({ onClick }: { onClick?: any }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const onMouseLeaveCall = () => {
    setIsClicked(false);
  };

  const onClickButton = (event: any) => {
    onClick(event);
    setIsClicked(true);
  };

  return (
    <div onMouseLeave={onMouseLeaveCall}>
      <Button
        onClick={onClickButton}
        text="Thêm"
        icon={<ArrowDownIcon defaultColor="white" selectedColor="white" />}
        isClicked={isClicked}
      />
    </div>
  );
};
enum AddButtonOptions {
  ADD_DOCTOR = "Thêm bác sĩ",
  ADD_PATIENT = "Thêm bệnh nhân",
}

export const AddPatientButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = React.useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseEnter = (option: string) => {
    setSelectedOption(option);
  };
  const handleMouseLeave = () => {
    setSelectedOption("");
  };

  return (
    <div>
      <AddButton onClick={handleClick} />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <NavLink
          to={RouteEnum.ADD_PATIENT_PAGE}
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            disableRipple
            onMouseEnter={() => handleMouseEnter(AddButtonOptions.ADD_PATIENT)}
            onMouseLeave={handleMouseLeave}
          >
            <AddPatientIcon
              defaultColor="#8C949D"
              selectedColor="#0D0C0C"
              isSelected={selectedOption === AddButtonOptions.ADD_PATIENT}
            />
            {AddButtonOptions.ADD_PATIENT}
          </MenuItem>
        </NavLink>

        <NavLink
          to={RouteEnum.ADD_DOCTOR_PAGE}
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            disableRipple
            onMouseEnter={() => handleMouseEnter(AddButtonOptions.ADD_DOCTOR)}
            onMouseLeave={handleMouseLeave}
          >
            <AddDoctorIcon
              defaultColor="#8C949D"
              selectedColor="#0D0C0C"
              isSelected={selectedOption === AddButtonOptions.ADD_DOCTOR}
            />
            {AddButtonOptions.ADD_DOCTOR}
          </MenuItem>
        </NavLink>
      </StyledMenu>
    </div>
  );
};
