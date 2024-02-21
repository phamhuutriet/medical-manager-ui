export enum RouteEnum {
  MAIN_PAGE = "/",
  PATIENT_PAGE = "/patients",
  DOCTOR_PAGE = "/doctors",
  EDIT_DOCTOR_PAGE = "/doctors/edit-doctor/:doctorId",
  ADD_DOCTOR_PAGE = "/doctors/add-doctor",
  EDIT_PATIENT_PAGE = "/patients/edit-patient/:patientId",
  ADD_PATIENT_PAGE = "/patients/add-patient",
  VIEW_PATIENT_PAGE = "/patients/details/:patientId",
}

export const RouteToName: Record<string, string> = {
  [RouteEnum.MAIN_PAGE]: "Tổng quan",
  [RouteEnum.DOCTOR_PAGE]: "Danh sách bác sĩ",
  "/doctors/edit-doctor": "Chi tiết bác sĩ",
  [RouteEnum.ADD_DOCTOR_PAGE]: "Thêm bác sĩ",
  [RouteEnum.PATIENT_PAGE]: "Bệnh nhân",
  "/patients/edit-patient": "Chỉnh sửa bệnh nhân",
  [RouteEnum.ADD_PATIENT_PAGE]: "Thêm bệnh nhân",
  "/patients/details": "Chi tiết bệnh nhân",
};
