export enum RouteEnum {
  MAIN_PAGE = "/",
  DOCTOR_PAGE = "/doctors",
  EDIT_DOCTOR_PAGE = "/doctors/edit-doctor/:doctorId",
  ADD_DOCTOR_PAGE = "/doctors/add-doctor",
}

export const RouteToName: Record<string, string> = {
  [RouteEnum.MAIN_PAGE]: "Tổng quan",
  [RouteEnum.DOCTOR_PAGE]: "Danh sách bác sĩ",
  [RouteEnum.EDIT_DOCTOR_PAGE]: "Chi tiết bác sĩ",
  "/doctors/edit-doctor": "Chi tiết bác sĩ",
  [RouteEnum.ADD_DOCTOR_PAGE]: "Thêm bác sĩ",
};
