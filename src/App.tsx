import React from "react";
import { SideBar } from "./mainPage/sidebar/SideBar";
import { Header } from "./mainPage/header/Header";
import { DoctorContent } from "./mainPage/doctor/DoctorContent";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { PatientContent } from "./mainPage/content/PatientContent";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <SideBar />
          <div className="second-column">
            <Header />
            <PatientContent />
            <DoctorContent />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
