import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteEnum } from "../../data/routeEnum";
import { AddRecordPage } from "./AddRecordPage";
import { EditRecordPage } from "./EditRecordPage";

export const RecordContent = () => {
  return (
    <Routes>
      <Route path={RouteEnum.RECORD_PAGE} element={<EditRecordPage />} />
      <Route path={RouteEnum.ADD_RECORD_PAGE} element={<AddRecordPage />} />
    </Routes>
  );
};
