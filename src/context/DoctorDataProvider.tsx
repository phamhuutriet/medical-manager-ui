import React, { PropsWithChildren, useEffect, useState } from "react";
import { Doctor, DoctorContext } from "./DoctorContext";
import { useThrowAsyncError } from "../hooks/useThrowAsyncError";
import { getAllDoctors } from "../service/doctorService";

export const DoctorDataProvider = ({ children }: PropsWithChildren) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const fetchedDoctors = await getAllDoctors();
        setDoctors(fetchedDoctors);
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

  return (
    <DoctorContext.Provider value={{ doctors, setDoctors }}>
      {children}
    </DoctorContext.Provider>
  );
};
