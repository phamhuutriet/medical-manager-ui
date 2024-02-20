import React, { useState } from "react";
import { Patient, PatientContext } from "../../context/PatientContext";
import mockPatients from "../../mock-data/mock_patient.json";
import { Doctor } from "../../context/DoctorContext";
import dayjs from "dayjs";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteEnum } from "../../data/routeEnum";
import { MainPageContent } from "./MainPageContent";
import { PatientDetailPage } from "./PatientDetailPage";
import { AddPatientPage } from "./AddPatientPage";

const createRowData = (
  id: string,
  firstName: string,
  lastName: string,
  gender: string,
  dateOfBirth: string,
  createdAt: string,
  doctor: Doctor,
  note: string,
  allergies: string[],
  address: string,
  phoneNumber: string
): Patient => {
  return {
    id,
    firstName,
    lastName,
    gender,
    dateOfBirth: dayjs(dateOfBirth).format("DD / MM / YYYY"),
    createdAt,
    doctor,
    note,
    allergies,
    address,
    phoneNumber,
  };
};

const MOCK_PATIENTS = mockPatients
  .slice(0, 10)
  .map((mockPatient) =>
    createRowData(
      mockPatient.id,
      mockPatient.firstName,
      mockPatient.lastName,
      mockPatient.gender,
      mockPatient.dateOfBirth,
      mockPatient.createdAt,
      mockPatient.doctor,
      mockPatient.note,
      mockPatient.allergies,
      mockPatient.address,
      mockPatient.phoneNumber
    )
  );

export const PatientContent = () => {
  const [patients, setPatients] = useState<Patient[]>(MOCK_PATIENTS);

  return (
    <PatientContext.Provider value={{ patients, setPatients }}>
      <Routes>
        <Route path={RouteEnum.MAIN_PAGE} element={<MainPageContent />} />
        <Route path={RouteEnum.PATIENT_PAGE} element={<MainPageContent />} />
        <Route
          path={RouteEnum.EDIT_PATIENT_PAGE}
          element={<PatientDetailPage />}
        />
        <Route path={RouteEnum.ADD_PATIENT_PAGE} element={<AddPatientPage />} />
      </Routes>
    </PatientContext.Provider>
  );
};
