export enum RouteEnum {
  MAIN_PAGE = "/",
  PATIENT_PAGE = "/patients",
  DOCTOR_PAGE = "/doctors",
  EDIT_DOCTOR_PAGE = "/doctors/edit-doctor/:doctorId",
  ADD_DOCTOR_PAGE = "/doctors/add-doctor",
  EDIT_PATIENT_PAGE = "/patients/edit-patient/:patientId",
}

export const RouteToName: Record<string, string> = {
  [RouteEnum.MAIN_PAGE]: "Tổng quan",
  [RouteEnum.DOCTOR_PAGE]: "Danh sách bác sĩ",
  [RouteEnum.EDIT_DOCTOR_PAGE]: "Chi tiết bác sĩ",
  "/doctors/edit-doctor": "Chi tiết bác sĩ",
  [RouteEnum.ADD_DOCTOR_PAGE]: "Thêm bác sĩ",
  [RouteEnum.EDIT_PATIENT_PAGE]: "Chi tiết bệnh nhân",
  [RouteEnum.PATIENT_PAGE]: "Bệnh nhân",
  "/patients/edit-patient": "Chi tiết bệnh nhân",
};
