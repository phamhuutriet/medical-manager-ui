import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteEnum } from "./data/routeEnum";
import { MainPage } from "./mainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={RouteEnum.MAIN_PAGE} element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
