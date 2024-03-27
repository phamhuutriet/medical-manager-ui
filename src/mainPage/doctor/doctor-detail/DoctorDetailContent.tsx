import React, { useEffect, useState } from "react";
import { BirthBox, NameBox, TextInputBox } from "./NameBox";
import { Button } from "../../../components/Button";
import { SexDropDown } from "./SexDropDown";
import { Doctor } from "../../../context/DoctorContext";
import { useNavigate, useParams } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import { AvatarBox } from "./AvatarBox";
import { useThrowAsyncError } from "../../../hooks/useThrowAsyncError";
import { updateDoctorService } from "../../../service/doctorService";
import { AddSuccessfulModal } from "../../../components/AddSuccessfulModal";
import {
  useDoctorAPI,
  useDoctorData,
} from "../../../context/DoctorDataProvider";
import "./index.css";
import { DoctorDetailContentContainer } from "./Styles";

export const DoctorDetailContent = () => {
  const { doctorId } = useParams();
  const { doctors } = useDoctorData();
  const { updateDoctor } = useDoctorAPI();
  const [doctor, setDoctor] = useState<Doctor | undefined>();
  const [isUpdateSuccessfulModalOpen, setIsUpdateSuccessfulModalOpen] =
    useState(false);
  const navigate = useNavigate();
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    const currentDoctor = doctors.find((doctor) => doctor.id === doctorId);
    setDoctor(currentDoctor);
  }, [doctors, doctorId]);

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      if (doctor) {
        setDoctor({ ...doctor, [attribute]: value });
      }
    };
  };

  const saveDoctor = async () => {
    try {
      const updatedDoctor = await updateDoctorService(doctor as Doctor);
      updateDoctor(updatedDoctor);
      setIsUpdateSuccessfulModalOpen(true);
    } catch {
      throwAsyncError(new Error("Cập nhật bác sĩ thất bại, vui lòng thử lại"));
    }
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.DOCTOR_PAGE);
  };

  if (!doctor) {
    return <>Bác sĩ không tồn tại</>;
  }

  return (
    <div>
      <DoctorDetailContentContainer>
        <AddSuccessfulModal
          open={isUpdateSuccessfulModalOpen}
          handleClose={() => setIsUpdateSuccessfulModalOpen(false)}
          handleRedirect={() => navigate(RouteEnum.DOCTOR_PAGE)}
          onClickConfirm={() => setIsUpdateSuccessfulModalOpen(false)}
          title="Cập nhật bác sĩ thành công"
          innerText="Chúc mừng bạn đã cập nhật hồ sơ bác sĩ thành công"
          leftButtonText="Về danh sách bác sĩ"
          rightButtonText="Xem chi tiết"
        />
        <AvatarBox />
        <NameBox
          entity={doctor}
          setFirstName={setAttribute("firstName")}
          setLastName={setAttribute("lastName")}
        />
        <SexDropDown sex={doctor.gender} setSex={setAttribute("gender")} />
        <BirthBox
          dateOfBirth={doctor.dateOfBirth}
          setDateOfBirth={setAttribute("dateOfBirth")}
        />
        <TextInputBox
          text={doctor.phoneNumber}
          setText={setAttribute("phoneNumber")}
          boxTitle="Số điện thoại"
          placeholder="+84 999 999 999"
        />
      </DoctorDetailContentContainer>
      <ButtonsBox saveDoctor={saveDoctor} cancelEditDoctor={cancelEditDoctor} />
    </div>
  );
};

const ButtonsBox = ({
  saveDoctor,
  cancelEditDoctor,
}: {
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
        text="Lưu"
        className="save-button"
        onClick={saveDoctor}
        innerButtonClassName="save-button-inner"
      />
    </div>
  );
};
