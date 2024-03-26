import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { Patient } from "./PatientContext";
import { useThrowAsyncError } from "../hooks/useThrowAsyncError";
import { useQuery } from "../hooks/api/useQuery";
import { getUserId } from "../utils/auth";

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
  const [{ data, isLoading, error }] = useQuery(
    `/user/${getUserId()}/patients/`,
    {},
    {}
  );
  const [patients, dispatch] = useReducer(reducer, []);
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    if (error) {
      throwAsyncError(error);
    }
    if (data) {
      dispatch({ type: "INIT", payload: data });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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

  const patientData = { patients, isLoading };

  return (
    <PatientDataContext.Provider value={patientData}>
      <PatientAPIContext.Provider value={api}>
        {children}
      </PatientAPIContext.Provider>
    </PatientDataContext.Provider>
  );
};

export const usePatientData = () => useContext(PatientDataContext);
export const usePatientAPI = () => useContext(PatientAPIContext);
