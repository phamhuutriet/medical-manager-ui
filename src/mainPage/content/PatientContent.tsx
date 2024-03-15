import React, { useEffect, useState } from "react";
import { Patient, PatientContext } from "../../context/PatientContext";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteEnum } from "../../data/routeEnum";
import { MainPageContent } from "./main-page/MainPageContent";
import { EditPatientPage } from "./edit-patient/EditPatientPage";
import { AddPatientPage } from "./add-patient/AddPatientPage";
import { ViewPatientPage } from "./view-patient/ViewPatientPage";
import { getAllPatients } from "../../service/patientService";
import { useThrowAsyncError } from "../../hooks/useThrowAsyncError";
import { WholeComponentLoadingWrapper } from "../../components/LoadingWrapper";

export const PatientContent = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setIsLoading(true);
        const fetchedPatients = await getAllPatients();
        setPatients(fetchedPatients);
        setIsLoading(false);
      } catch (error) {
        throwAsyncError(
          new Error("Lỗi tải danh sách bệnh nhân, vui lòng tải lại trang")
        );
      }
    };

    fetchPatients();
  }, []);

  return (
    <WholeComponentLoadingWrapper
      isLoading={isLoading}
      loadingText="Đang tải danh sách bệnh nhân, vui lòng đợi tí"
    >
      <PatientContext.Provider value={{ patients, setPatients }}>
        <Routes>
          <Route path={RouteEnum.MAIN_PAGE} element={<MainPageContent />} />
          <Route path={RouteEnum.PATIENT_PAGE} element={<MainPageContent />} />
          <Route
            path={RouteEnum.EDIT_PATIENT_PAGE}
            element={<EditPatientPage />}
          />
          <Route
            path={RouteEnum.ADD_PATIENT_PAGE}
            element={<AddPatientPage />}
          />
          <Route
            path={RouteEnum.VIEW_PATIENT_PAGE}
            element={<ViewPatientPage />}
          />
        </Routes>
      </PatientContext.Provider>
    </WholeComponentLoadingWrapper>
  );
};
