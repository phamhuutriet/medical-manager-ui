import React, { useEffect, useState } from "react";
import { SideBar } from "./mainPage/sidebar/SideBar";
import { Header } from "./mainPage/header/Header";
import { DoctorContent } from "./mainPage/doctor/DoctorContent";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { PatientContent } from "./mainPage/content/PatientContent";
import { Doctor, DoctorContext } from "./context/DoctorContext";
import { RecordContent } from "./mainPage/record/RecordContent";
import { useThrowAsyncError } from "./hooks/useThrowAsyncError";
import { getAllDoctors } from "./service/doctorService";

export const AppContent = ({
  isSignedIn,
  setIsSignedIn,
}: {
  isSignedIn: boolean;
  setIsSignedIn: Function;
}) => {
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
    <Router>
      <div className="App">
        <div className="app-container">
          <SideBar setIsSignedIn={setIsSignedIn} />
          <div className="second-column">
            <Header />
            <div className="page-content">
              <DoctorContext.Provider value={{ doctors, setDoctors }}>
                <PatientContent />
                <DoctorContent />
                <RecordContent />
              </DoctorContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
