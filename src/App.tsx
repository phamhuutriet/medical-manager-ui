import React, { useState } from "react";
import { SideBar } from "./mainPage/sidebar/SideBar";
import { Header } from "./mainPage/header/Header";
import "./app.css";
import { MainPageContent } from "./mainPage/content/MainPageContent";
import { SectionId } from "./data/sectionIdEnum";

// Used to define if a section is invisible
const visibilityClassnameFactory = (
  sectionId: string,
  currentSectionId: string
) => {
  return sectionId === currentSectionId ? "" : "invisible";
};

function App() {
  const [sectionId, setSectionId] = useState<SectionId>(SectionId.MAIN_PAGE);

  return (
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
          <section
            id={SectionId.DOCTOR_LIST_PAGE}
            className={visibilityClassnameFactory(
              sectionId,
              SectionId.DOCTOR_LIST_PAGE
            )}
          >
            <>DOCTOR LIST PAGE</>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
