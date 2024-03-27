import * as React from "react";
import { styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { MorePatientInfoIcon } from "../../img/svg/MorePatientInfoIcon";
import { EditPatientIcon } from "../../img/svg/EditPatientIcon";
import { RemovePatientIcon } from "../../img/svg/RemovePatientIcon";
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
    width: "207px", // TODO: find a way to parameterize this
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

const MoreInfoButton = ({ onClick }: { onClick: any }) => {
  return (
    <IconButton sx={{ height: "100%" }} onClick={onClick}>
      <MorePatientInfoIcon />
    </IconButton>
  );
};

enum DoctorMoreInfoEnum {
  EDIT = "Sửa hồ sơ",
  DELETE = "Xoá hồ sơ",
}

export const DoctorMoreInfoMenu = ({
  doctorId,
  openDeleteConfirmModal,
}: {
  doctorId: string;
  openDeleteConfirmModal: any;
}) => {
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
  const onClickDeleteDoctor = () => {
    openDeleteConfirmModal();
  };

  return (
    <div>
      <MoreInfoButton onClick={handleClick} />
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
          to={`/doctors/edit-doctor/${doctorId}`}
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            disableRipple
            onMouseEnter={() => handleMouseEnter(DoctorMoreInfoEnum.EDIT)}
            onMouseLeave={handleMouseLeave}
          >
            <EditPatientIcon
              defaultColor="#8C949D"
              selectedColor="#0D0C0C"
              isSelected={DoctorMoreInfoEnum.EDIT === selectedOption}
            />
            {DoctorMoreInfoEnum.EDIT}
          </MenuItem>
        </NavLink>
        <MenuItem
          onClick={() => {
            handleClose();
            onClickDeleteDoctor();
          }}
          disableRipple
          onMouseEnter={() => handleMouseEnter(DoctorMoreInfoEnum.DELETE)}
          onMouseLeave={handleMouseLeave}
        >
          <RemovePatientIcon
            defaultColor="#8C949D"
            selectedColor="#0D0C0C"
            isSelected={DoctorMoreInfoEnum.DELETE === selectedOption}
          />
          {DoctorMoreInfoEnum.DELETE}
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
