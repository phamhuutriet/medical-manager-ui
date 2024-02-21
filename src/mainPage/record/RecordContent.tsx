import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteEnum } from "../../data/routeEnum";
import { RecordPage } from "./RecordPage";

export const RecordContent = () => {
  return (
    <Routes>
      <Route path={RouteEnum.RECORD_PAGE} element={<RecordPage />} />
    </Routes>
  );
};
