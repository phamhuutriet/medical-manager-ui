import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { Doctor, DoctorContext } from "./DoctorContext";
import { useThrowAsyncError } from "../hooks/useThrowAsyncError";
import { getAllDoctors } from "../service/doctorService";

interface DoctorApiContextType {
  addDoctor: Function;
  deleteDoctor: Function;
  updateDoctor: Function;
}

const DoctorApiContext = createContext<DoctorApiContextType>({
  addDoctor: () => {},
  deleteDoctor: () => {},
  updateDoctor: () => {},
});

const reducer = (state: Doctor[], action: any) => {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((doctor: Doctor) => doctor.id !== action.payload.id);
    case "UPDATE":
      return state.map((doctor: Doctor) => {
        if (doctor.id === action.payload.id) {
          return action.payload;
        }
        return doctor;
      });
    default:
      return state;
  }
};

export const DoctorDataProvider = ({ children }: PropsWithChildren) => {
  const [doctors, dispatch] = useReducer(reducer, []);
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const fetchedDoctors = await getAllDoctors();
        dispatch({ type: "INIT", payload: fetchedDoctors });
      } catch (e) {
        throwAsyncError(
          new Error(
            "Không thể lấy được danh sách bác sĩ, vui lòng tải lại trang"
          )
        );
      }
    };
    fetchDoctors();
  }, []);

  const api = useMemo(() => {
    return {
      addDoctor: (doctor: Doctor) => dispatch({ type: "ADD", payload: doctor }),
      deleteDoctor: (doctor: Doctor) =>
        dispatch({ type: "DELETE", payload: doctor }),
      updateDoctor: (doctor: Doctor) =>
        dispatch({ type: "UPDATE", payload: doctor }),
    };
  }, []);

  return (
    <DoctorContext.Provider value={{ doctors }}>
      <DoctorApiContext.Provider value={api}>
        {children}
      </DoctorApiContext.Provider>
    </DoctorContext.Provider>
  );
};

export const useDoctorAPI = () => useContext(DoctorApiContext);
