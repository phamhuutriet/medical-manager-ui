import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteEnum } from "../../data/routeEnum";
import { MainPageContent } from "./main-page/MainPageContent";
import { EditPatientPage } from "./edit-patient/EditPatientPage";
import { AddPatientPage } from "./add-patient/AddPatientPage";
import { ViewPatientPage } from "./view-patient/ViewPatientPage";
import { WholeComponentLoadingWrapper } from "../../components/LoadingWrapper";
import { usePatientData } from "../../context/PatientDataProvider";

export const PatientContent = () => {
  const { isLoading } = usePatientData();

  return (
    <WholeComponentLoadingWrapper
      isLoading={isLoading}
      loadingText="Đang tải danh sách bệnh nhân, vui lòng đợi tí"
    >
      <Routes>
        <Route path={RouteEnum.MAIN_PAGE} element={<MainPageContent />} />
        <Route path={RouteEnum.PATIENT_PAGE} element={<MainPageContent />} />
        <Route
          path={RouteEnum.EDIT_PATIENT_PAGE}
          element={<EditPatientPage />}
        />
        <Route path={RouteEnum.ADD_PATIENT_PAGE} element={<AddPatientPage />} />
        <Route
          path={RouteEnum.VIEW_PATIENT_PAGE}
          element={<ViewPatientPage />}
        />
      </Routes>
    </WholeComponentLoadingWrapper>
  );
};
