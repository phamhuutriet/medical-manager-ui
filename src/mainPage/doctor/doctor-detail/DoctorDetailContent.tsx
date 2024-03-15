import React, { useContext, useEffect, useState } from "react";
import { BirthBox, NameBox, PhoneNumberBox } from "./NameBox";
import { Button } from "../../../components/Button";
import { SexDropDown } from "./SexDropDown";
import { Doctor, DoctorContext } from "../../../context/DoctorContext";
import { useNavigate, useParams } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import { AvatarBox } from "./AvatarBox";
import { useThrowAsyncError } from "../../../hooks/useThrowAsyncError";
import { updateDoctor } from "../../../service/doctorService";
import { AddSuccessfulModal } from "../../../components/AddSuccessfulModal";
import "./index.css";

export const DoctorDetailContent = () => {
  const { doctorId } = useParams();
  const { doctors, setDoctors } = useContext(DoctorContext);
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
      const updatedDoctor = await updateDoctor(doctor as Doctor);
      setDoctors(
        doctors.map((doctorItem) => {
          if (doctor && doctorItem.id === updatedDoctor.id) {
            return updatedDoctor;
          }
          return doctorItem;
        })
      );
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
      <div className="doctor-detail-content">
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
        <PhoneNumberBox
          setPhoneNumber={setAttribute("phoneNumber")}
          phoneNumber={doctor.phoneNumber}
        />
      </div>
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
