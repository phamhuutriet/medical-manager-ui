import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Patient } from "./PatientContext";
import { getAllPatients } from "../service/patientService";
import { useThrowAsyncError } from "../hooks/useThrowAsyncError";

interface PatientDataContextType {
  patients: Patient[];
  isLoading: boolean;
}

interface PatientAPIContextType {
  addPatient: Function;
  updatePatient: Function;
  deletePatient: Function;
}

const PatientDataContext = createContext<PatientDataContextType>({
  patients: [],
  isLoading: false,
});

const PatientAPIContext = createContext<PatientAPIContextType>({
  addPatient: () => {},
  updatePatient: () => {},
  deletePatient: () => {},
});

const reducer = (state: Patient[], action: any) => {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((patient: Patient) => {
        if (patient.id === action.payload.id) {
          return action.payload;
        }
        return patient;
      });
    case "DELETE":
      return state.filter(
        (patient: Patient) => patient.id !== action.payload.id
      );
    default:
      return state;
  }
};

export const PatientDataProvider = ({ children }: PropsWithChildren) => {
  const [patients, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setIsLoading(true);
        const fetchedPatients = await getAllPatients();
        dispatch({ type: "INIT", payload: fetchedPatients });
        setIsLoading(false);
      } catch (error) {
        throwAsyncError(
          new Error("Lỗi tải danh sách bệnh nhân, vui lòng tải lại trang")
        );
      }
    };

    fetchPatients();
  }, []);

  const api = useMemo(() => {
    return {
      addPatient: (patient: Patient) =>
        dispatch({ type: "ADD", payload: patient }),
      updatePatient: (patient: Patient) =>
        dispatch({ type: "UPDATE", payload: patient }),
      deletePatient: (patient: Patient) =>
        dispatch({ type: "DELETE", payload: patient }),
    };
  }, []);

  const data = { patients, isLoading };

  return (
    <PatientDataContext.Provider value={data}>
      <PatientAPIContext.Provider value={api}>
        {children}
      </PatientAPIContext.Provider>
    </PatientDataContext.Provider>
  );
};

export const usePatientData = () => useContext(PatientDataContext);
export const usePatientAPI = () => useContext(PatientAPIContext);
