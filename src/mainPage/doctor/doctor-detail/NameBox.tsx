import React from "react";
import { IconButton } from "@mui/material";
import { EditPatientIcon } from "../../../img/svg/EditPatientIcon";
import { CalendarIcon } from "../../../img/svg/CalendarIcon";
import { BirthCalendar } from "./BirthCalendar";
import dayjs, { Dayjs } from "dayjs";
import { Doctor } from "../../../context/DoctorContext";

export const NameBox = ({
  doctor,
  setFirstName,
  setLastName,
}: {
  doctor: Doctor;
  setFirstName: Function;
  setLastName: Function;
}) => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Họ</div>
        <div className="content">
          <input
            value={doctor.firstName}
            className="content-input"
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
            value={doctor.lastName}
            className="content-input"
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
  const setSelectedDate = (newDate: Dayjs) => {
    setDateOfBirth(newDate.format("DD / MM / YYYY"));
  };

  return (
    <div className="box">
      <div className="box-item" style={{ position: "relative" }}>
        <div className="title">Ngày sinh</div>
        <div className="content">
          <div style={{ width: "100%" }}>
            {selectedDate.format("DD / MM / YYYY")}
          </div>
          <IconButton
            sx={{ height: "100%" }}
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            <CalendarIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
        </div>
        <BirthCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          isCalendarOpen={isCalendarOpen}
        />
      </div>
    </div>
  );
};

export const PhoneNumberBox = ({
  doctorPhoneNumber,
  setPhoneNumber,
  isIconDisplay,
}: {
  doctorPhoneNumber: string;
  setPhoneNumber: Function;
  isIconDisplay: boolean;
}) => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Số điện thoại</div>
        <div className="content">
          <input
            value={doctorPhoneNumber}
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
