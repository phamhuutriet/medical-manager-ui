import React, { useState } from "react";
import { SideBar } from "./mainPage/sidebar/SideBar";
import { Header } from "./mainPage/header/Header";
import { DoctorContent, MOCK_DOCTORS } from "./mainPage/doctor/DoctorContent";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { PatientContent } from "./mainPage/content/PatientContent";
import { Doctor, DoctorContext } from "./context/DoctorContext";
import { RecordContent } from "./mainPage/record/RecordContent";

export const AppContent = ({ setIsSignedIn }: { setIsSignedIn: Function }) => {
  const [doctors, setDoctors] = useState<Doctor[]>(MOCK_DOCTORS);

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
