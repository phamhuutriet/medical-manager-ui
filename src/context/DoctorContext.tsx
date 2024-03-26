import { createContext } from "react";

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
}

interface DoctorContextType {
  doctors: Doctor[];
  isLoading: boolean;
  // setDoctors: Function;
}

export const DoctorContext = createContext<DoctorContextType>({
  doctors: [],
  isLoading: false,
  // setDoctors: () => {},
});
