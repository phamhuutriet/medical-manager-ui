import React, { useState } from "react";
import { SideBar } from "./mainPage/sidebar/SideBar";
import { Header } from "./mainPage/header/Header";
import { MainPageContent } from "./mainPage/content/MainPageContent";
import { SectionId } from "./data/sectionIdEnum";
import { DoctorListPage } from "./mainPage/doctor/DoctorListPage";
import { DoctorDetailPage } from "./mainPage/doctor/doctor-detail/DoctorDetailPage";
import { SectionContext } from "./context/SectionContext";
import "./app.css";
import { DoctorContext } from "./context/DoctorContext";
import { DoctorContent } from "./mainPage/doctor/DoctorContent";

// Used to define if a section is invisible
export const visibilityClassnameFactory = (
  sectionId: string,
  currentSectionId: string
) => {
  return sectionId === currentSectionId ? "" : "invisible";
};

function App() {
  const [sectionId, setSectionId] = useState<SectionId>(SectionId.MAIN_PAGE);

  return (
    <SectionContext.Provider value={{ sectionId, setSectionId }}>
      <div className="App">
        <div className="app-container">
          <SideBar setSectionId={setSectionId} />
          <div className="second-column">
            <Header />
            <section
              id={SectionId.MAIN_PAGE}
              className={visibilityClassnameFactory(
                sectionId,
                SectionId.MAIN_PAGE
              )}
            >
              <MainPageContent />
            </section>
            <DoctorContent />
          </div>
        </div>
      </div>
    </SectionContext.Provider>
  );
}

export default App;
