import React from "react";
import { IconButton } from "@mui/material";
import { EditPatientIcon } from "../../../img/svg/EditPatientIcon";
import { CalendarIcon } from "../../../img/svg/CalendarIcon";
import { BirthCalendar } from "./BirthCalendar";
import dayjs, { Dayjs } from "dayjs";
import { Doctor } from "../../../context/DoctorContext";

export const TextInputBox = ({
  entity,
  setEntity,
  boxTitle,
  placeholder,
}: {
  entity: any;
  setEntity: Function;
  boxTitle: string;
  placeholder: string;
}) => {
  return (
    <div className="box-item">
      <div className="title">{boxTitle}</div>
      <div className="content">
        <input
          value={entity}
          className="content-input"
          placeholder={placeholder}
          onChange={(e) => setEntity(e.target.value)}
        />
        <IconButton>
          <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#586EE0" />
        </IconButton>
      </div>
    </div>
  );
};

export const NameBox = ({
  entity,
  setFirstName,
  setLastName,
}: {
  entity?: any;
  setFirstName: Function;
  setLastName: Function;
}) => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Họ</div>
        <div className="content">
          <input
            value={entity ? entity.firstName : ""}
            className="content-input"
            placeholder="Họ"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <IconButton>
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#586EE0" />
          </IconButton>
        </div>
      </div>
      <div className="box-item">
        <div className="title">Tên</div>
        <div className="content">
          <input
            value={entity ? entity.lastName : ""}
            className="content-input"
            placeholder="Tên"
            onChange={(e) => setLastName(e.target.value)}
          />
          <IconButton>
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#586EE0" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const BirthBox = ({
  dateOfBirth,
  setDateOfBirth,
  isCalendarOpen,
  setIsCalendarOpen,
}: {
  dateOfBirth: string;
  setDateOfBirth: Function;
  isCalendarOpen: boolean;
  setIsCalendarOpen: Function;
}) => {
  const selectedDate = dayjs(dateOfBirth, "DD / MM / YYYY");
  const defaultDate = dayjs("02 / 01 / 1991");

  const setSelectedDate = (newDate: Dayjs) => {
    setDateOfBirth(newDate.format("DD / MM / YYYY"));
  };

  return (
    <div className="box">
      <div className="box-item" style={{ position: "relative" }}>
        <div className="title">Ngày sinh</div>
        <div className="content">
          <div style={{ width: "100%" }}>
            {dateOfBirth ? (
              selectedDate.format("DD / MM / YYYY")
            ) : (
              <div style={{ color: "#8c949d" }}>DD / MM / YYYY</div>
            )}
          </div>
          <IconButton
            sx={{ height: "100%" }}
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            <CalendarIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
        </div>
        <BirthCalendar
          selectedDate={dateOfBirth ? selectedDate : defaultDate}
          setSelectedDate={setSelectedDate}
          isCalendarOpen={isCalendarOpen}
        />
      </div>
    </div>
  );
};

export const PhoneNumberBox = ({
  phoneNumber,
  setPhoneNumber,
  isIconDisplay,
}: {
  phoneNumber: string;
  setPhoneNumber: Function;
  isIconDisplay: boolean;
}) => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Số điện thoại</div>
        <div className="content">
          <input
            value={phoneNumber}
            placeholder="+84 999 999 999"
            className="content-input"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <IconButton
            sx={{
              height: "100%",
              display: isIconDisplay ? "" : "none",
            }}
          >
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
