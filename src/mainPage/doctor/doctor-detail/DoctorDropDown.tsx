import * as React from "react";
import { ArrowDownIcon } from "../../../img/svg/ArrowDownIcon";
import { Doctor } from "../../../context/DoctorContext";
import { SearchIcon } from "../../../img/svg/SearchIcon";
import { useDoctorData } from "../../../context/DoctorDataProvider";

export const DoctorDropDown = ({
  doctor,
  setDoctor,
  noTitle,
}: {
  doctor?: Doctor;
  setDoctor: Function;
  noTitle?: boolean;
}) => {
  const { doctors } = useDoctorData();
  const [currentDoctors, setCurrentDoctors] = React.useState<Doctor[]>(doctors);
  const [open, setOpen] = React.useState(false);
  const [filterDoctorName, setFilterDoctorName] = React.useState("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
    setFilterDoctorName("");
    setCurrentDoctors(doctors);
  };

  const handleClickOption = (option: any) => {
    setDoctor(option);
    handleClose();
  };

  const onChangeSearch = (e: any) => {
    const filteredDoctors = doctors.filter((doctor) =>
      `${doctor.firstName} ${doctor.lastName}`.includes(e.target.value)
    );
    setFilterDoctorName(e.target.value);
    setCurrentDoctors(filteredDoctors);
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
          {!noTitle && <div className="title">Bác sĩ</div>}
          <div className="content">
            {doctor ? (
              <div
                style={{ width: "100%" }}
              >{`${doctor.firstName} ${doctor.lastName}`}</div>
            ) : (
              <div
                style={{
                  width: "100%",
                  color: "var(--color-text-secondary)",
                  fontSize: "16px",
                }}
              >
                Chọn bác sĩ
              </div>
            )}

            <ArrowDownIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </div>
        </div>
        <DropDown open={open}>
          <div className="dropdown-search-bar">
            <SearchIcon />
            <input
              className="search-bar-input"
              placeholder="Tìm kiếm bác sĩ"
              value={filterDoctorName}
              onChange={onChangeSearch}
            />
          </div>
          <div className="dropdown-menu-list">
            {currentDoctors.map((doctor) => (
              <DropDownItem
                key={doctor.id}
                label={`${doctor.firstName} ${doctor.lastName}`}
                onClick={() => handleClickOption(doctor)}
              />
            ))}
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
