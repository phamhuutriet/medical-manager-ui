import React from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./birthCalendar.css";

interface BirthCalendarProps {
  selectedDate: Dayjs;
  setSelectedDate: Function;
  isCalendarOpen: boolean;
}

export const BirthCalendar = ({
  selectedDate,
  setSelectedDate,
  isCalendarOpen,
}: BirthCalendarProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        sx={{
          background: "white",
          position: "absolute",
          top: "100%",
          marginTop: "8px",
          right: "0%",
          border: "1px solid #A5A7AF",
          borderRadius: "8px",
          fontFamily: "Be Vietnam Pro",
          display: isCalendarOpen ? "" : "none",
        }}
        onChange={(newDate) => setSelectedDate(newDate)}
      />
    </LocalizationProvider>
  );
};
