import React, { useState } from "react";
import { DoctorListPage } from "./DoctorListPage";
import { DoctorDetailPage } from "./doctor-detail/DoctorDetailPage";
import { Doctor, DoctorContext } from "../../context/DoctorContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import mockDoctors from "../../mock-data/mock_doctor.json";
import { RouteEnum } from "../../data/routeEnum";
import dayjs from "dayjs";

function createRowData(
  id: string,
  firstName: string,
  lastName: string,
  sex: string,
  dateOfBirth: string,
  phoneNumber: string
) {
  return {
    id,
    firstName,
    lastName,
    sex,
    dateOfBirth: dayjs(dateOfBirth).format("DD / MM / YYYY"),
    phoneNumber,
  };
}

const MOCK_DOCTORS = mockDoctors.map((mockDoctor) =>
  createRowData(
    mockDoctor.id,
    mockDoctor.firstName,
    mockDoctor.lastName,
    mockDoctor.gender,
    mockDoctor.dateOfBirth,
    mockDoctor.phoneNumber
  )
);

export const DoctorContent = () => {
  const [doctorId, setDoctorId] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>(MOCK_DOCTORS);

  return (
    <DoctorContext.Provider
      value={{ doctorId, setDoctorId, doctors, setDoctors }}
    >
      <Routes>
        <Route path={RouteEnum.DOCTOR_PAGE} element={<DoctorListPage />} />
        <Route
          path={RouteEnum.EDIT_DOCTOR_PAGE}
          element={<DoctorDetailPage />}
        />
      </Routes>
    </DoctorContext.Provider>
  );
};
