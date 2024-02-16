import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { EditPatientIcon } from "../../../img/svg/EditPatientIcon";
import { ArrowDownIcon } from "../../../img/svg/ArrowDownIcon";
import { CalendarIcon } from "../../../img/svg/CalendarIcon";
import { BirthCalendar } from "./BirthCalendar";
import dayjs, { Dayjs } from "dayjs";

export const NameBox = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Họ</div>
        <div className="content">
          <input
            value={firstName}
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
            value={lastName}
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
  isCalendarOpen,
  setIsCalendarOpen,
}: {
  isCalendarOpen: boolean;
  setIsCalendarOpen: Function;
}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs("2000-01-01"));

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
  isIconDisplay,
}: {
  isIconDisplay: boolean;
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Số điện thoại</div>
        <div className="content">
          <input
            value={phoneNumber}
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
