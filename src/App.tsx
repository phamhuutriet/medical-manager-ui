import React from "react";
import { SideBar } from "./mainPage/sidebar/SideBar";
import { Header } from "./mainPage/header/Header";
import { MainPageContent } from "./mainPage/content/MainPageContent";
import { DoctorContent } from "./mainPage/doctor/DoctorContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { RouteEnum } from "./data/routeEnum";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <SideBar />
          <div className="second-column">
            <Header />
            <Routes>
              <Route path={RouteEnum.MAIN_PAGE} element={<MainPageContent />} />
            </Routes>
            <DoctorContent />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
