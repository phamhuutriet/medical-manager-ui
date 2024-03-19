import React from "react";
import { SideBar } from "./mainPage/sidebar/SideBar";
import { Header } from "./mainPage/header/Header";
import { DoctorContent } from "./mainPage/doctor/DoctorContent";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { PatientContent } from "./mainPage/content/PatientContent";
import { RecordContent } from "./mainPage/record/RecordContent";
import { DoctorDataProvider } from "./context/DoctorDataProvider";
import { PatientDataProvider } from "./context/PatientDataProvider";

export const AppContent = ({ setIsSignedIn }: { setIsSignedIn: Function }) => {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <SideBar setIsSignedIn={setIsSignedIn} />
          <div className="second-column">
            <Header />
            <div className="page-content">
              <DoctorDataProvider>
                <PatientDataProvider>
                  <PatientContent />
                  <DoctorContent />
                  <RecordContent />
                </PatientDataProvider>
              </DoctorDataProvider>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
