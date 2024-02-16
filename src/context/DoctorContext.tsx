import { createContext } from "react";

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  sex: string;
  dateOfBirth: string;
  phoneNumber: string;
}

interface DoctorContextType {
  doctorId: string;
  setDoctorId: Function;
  doctors: Doctor[];
  setDoctors: Function;
}

export const DoctorContext = createContext<DoctorContextType>({
  doctorId: "",
  setDoctorId: () => {},
  doctors: [],
  setDoctors: () => {},
});
