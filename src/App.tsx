import React, { useState } from "react";
import { SideBar } from "./mainPage/sidebar/SideBar";
import { Header } from "./mainPage/header/Header";
import { MainPageContent } from "./mainPage/content/MainPageContent";
import { SectionId } from "./data/sectionIdEnum";
import { SectionContext } from "./context/SectionContext";
import { DoctorContent } from "./mainPage/doctor/DoctorContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { RouteEnum } from "./data/routeEnum";

function App() {
  const [sectionId, setSectionId] = useState<SectionId>(SectionId.MAIN_PAGE);

  return (
    <SectionContext.Provider value={{ sectionId, setSectionId }}>
      <Router>
        <div className="App">
          <div className="app-container">
            <SideBar />
            <div className="second-column">
              <Header />
              <Routes>
                <Route
                  path={RouteEnum.MAIN_PAGE}
                  element={<MainPageContent />}
                />
              </Routes>
              <DoctorContent />
            </div>
          </div>
        </div>
      </Router>
    </SectionContext.Provider>
  );
}

export default App;
