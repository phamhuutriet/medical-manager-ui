import React, { useState } from "react";
import { BirthBox, NameBox, TextInputBox } from "../doctor-detail/NameBox";
import { Button } from "../../../components/Button";
import { SexDropDown } from "../doctor-detail/SexDropDown";
import { useNavigate } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import { AddDoctorAvatarBox } from "./AddDoctorAvatarBox";
import { AddSuccessfulModal } from "../../../components/AddSuccessfulModal";
import { useThrowAsyncError } from "../../../hooks/useThrowAsyncError";
import { createDoctor } from "../../../service/doctorService";
import { WholeComponentLoadingWrapper } from "../../../components/LoadingWrapper";
import { useDoctorAPI } from "../../../context/DoctorDataProvider";
import "./index.css";

const VALID_KEYS = [
  "firstName",
  "lastName",
  "gender",
  "dateOfBirth",
  "phoneNumber",
];

export const AddDoctorPageContent = () => {
  const { addDoctor } = useDoctorAPI();
  const [doctor, setDoctor] = useState<any>({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
  });
  const doctorKeys = Object.keys(doctor ? doctor : {});
  const isValidDoctor = VALID_KEYS.every(
    (key) => doctorKeys.includes(key) && doctor[key]
  );
  const [isAddSuccessfulModalOpen, setIsAddSuccessfulModalOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const throwAsyncError = useThrowAsyncError();
  const navigate = useNavigate();

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      setDoctor({ ...doctor, [attribute]: value });
    };
  };

  const saveDoctor = async () => {
    try {
      setIsLoading(true);
      const newDoctor = await createDoctor(doctor);
      addDoctor(newDoctor);
      setIsAddSuccessfulModalOpen(true);
      setIsLoading(false);
    } catch {
      throwAsyncError(new Error("Tạo bác sĩ thất bại, vui lòng thử lại"));
    }
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.DOCTOR_PAGE);
  };

  return (
    <WholeComponentLoadingWrapper
      isLoading={isLoading}
      loadingText="Đang tạo bác sĩ"
    >
      <div>
        <AddSuccessfulModal
          open={isAddSuccessfulModalOpen}
          handleClose={() => setIsAddSuccessfulModalOpen(false)}
          handleRedirect={() => navigate(RouteEnum.DOCTOR_PAGE)}
          onClickConfirm={() => {}}
          title="Thêm bác sĩ thành công"
          innerText="Chúc mừng bạn đã tạo hồ sơ bác sĩ thành công"
          leftButtonText="Về danh sách bác sĩ"
          rightButtonText="Xem chi tiết"
        />
        <div className="doctor-detail-content">
          <AddDoctorAvatarBox />
          <NameBox
            entity={doctor}
            setFirstName={setAttribute("firstName")}
            setLastName={setAttribute("lastName")}
          />
          <SexDropDown
            sex={doctor ? doctor.gender : ""}
            setSex={setAttribute("gender")}
          />
          <BirthBox
            dateOfBirth={doctor ? doctor.dateOfBirth : ""}
            setDateOfBirth={setAttribute("dateOfBirth")}
          />
          <TextInputBox
            text={doctor.phoneNumber}
            setText={setAttribute("phoneNumber")}
            boxTitle="Số điện thoại"
            placeholder="+84 999 999 999"
          />
        </div>
        <ButtonsBox
          isValidDoctor={isValidDoctor}
          saveDoctor={saveDoctor}
          cancelEditDoctor={cancelEditDoctor}
        />
      </div>
    </WholeComponentLoadingWrapper>
  );
};

const ButtonsBox = ({
  isValidDoctor,
  saveDoctor,
  cancelEditDoctor,
}: {
  isValidDoctor: boolean;
  saveDoctor: Function;
  cancelEditDoctor: Function;
}) => {
  return (
    <div className="buttons-box">
      <Button
        text="Huỷ"
        className="cancel-button"
        onClick={cancelEditDoctor}
        innerButtonClassName="cancel-button-inner"
      />
      <Button
        text="Thêm bác sĩ"
        className="save-button"
        onClick={saveDoctor}
        innerButtonClassName="save-button-inner"
        disable={!isValidDoctor}
      />
    </div>
  );
};
