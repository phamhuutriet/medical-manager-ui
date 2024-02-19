import { createContext } from "react";
import { Doctor } from "./DoctorContext";

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  phoneNumber: string;
  allergies: string[];
  note: string;
  doctor: Doctor;
  createdAt: string;
}

interface PatientContextType {
  patients: Patient[];
  setPatients: Function;
}

export const PatientContext = createContext<PatientContextType>({
  patients: [],
  setPatients: () => {},
});
