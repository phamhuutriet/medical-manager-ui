import * as React from "react";
import { ArrowDownIcon } from "../../../img/svg/ArrowDownIcon";
import { Doctor } from "../../../context/DoctorContext";
import { SearchIcon } from "../../../img/svg/SearchIcon";
import { useDoctorData } from "../../../context/DoctorDataProvider";
import "./index.css";

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
  MALE = "M",
  FEMALE = "F",
}

export const SexDropDown = ({
  sex,
  setSex,
}: {
  sex: string;
  setSex: Function;
}) => {
  const selectedOption = sex === SexOption.MALE ? SexText.MALE : SexText.FEMALE;
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prev) => !prev);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOption = (option: any) => {
    setSex(option);
    handleClose();
  };

  return (
    <div className="box">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <div className="box-item" onClick={handleClick}>
          <div className="title">Giới tính</div>
          <div className="content">
            {sex ? (
              <div style={{ width: "100%" }}>{selectedOption}</div>
            ) : (
              <div style={{ width: "100%", color: "#8C949D" }}>
                Chọn giới tính
              </div>
            )}

            <ArrowDownIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </div>
        </div>

        <DropDown open={open}>
          <div className="dropdown-menu-list">
            <DropDownItem
              key={SexText.MALE}
              label={SexText.MALE}
              onClick={() => handleClickOption(SexOption.MALE)}
            />
            <DropDownItem
              key={SexText.FEMALE}
              label={SexText.FEMALE}
              onClick={() => handleClickOption(SexOption.FEMALE)}
            />
          </div>
        </DropDown>
      </div>
    </div>
  );
};

const DropDown = ({ open, children }: { open: boolean; children?: any }) => {
  return (
    <div className={`menu-container ${open ? "open" : ""}`}>{children}</div>
  );
};

const DropDownItem = ({ label, onClick }: { label: string; onClick: any }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {label}
    </div>
  );
};
