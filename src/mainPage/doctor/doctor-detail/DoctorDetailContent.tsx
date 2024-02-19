import React, { useContext, useState } from "react";
import { BirthBox, NameBox, PhoneNumberBox } from "./NameBox";
import { Button } from "../../../components/Button";
import { SexDropDown } from "./SexDropDown";
import { Doctor, DoctorContext } from "../../../context/DoctorContext";
import { useNavigate, useParams } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import "./index.css";
import { AvatarBox } from "./AvatarBox";

export const DoctorDetailContent = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const { doctorId } = useParams();
  const { doctors, setDoctors } = useContext(DoctorContext);
  const currentDoctor = doctors.find((doctor) => doctor.id === doctorId);
  const [doctor, setDoctor] = useState<Doctor | undefined>(currentDoctor);
  const navigate = useNavigate();

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      if (doctor) {
        setDoctor({ ...doctor, [attribute]: value });
      }
    };
  };

  const saveDoctor = () => {
    setDoctors(
      doctors.map((doctorItem) => {
        if (doctor && doctorItem.id === doctor.id) {
          return doctor;
        }
        return doctorItem;
      })
    );
    navigate(RouteEnum.DOCTOR_PAGE);
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.DOCTOR_PAGE);
  };

  if (!doctor) {
    return <>Error no doctor</>;
  }

  return (
    <div>
      <div className="doctor-detail-content">
        <AvatarBox />
        <NameBox
          entity={doctor}
          setFirstName={setAttribute("firstName")}
          setLastName={setAttribute("lastName")}
        />
        <SexDropDown sex={doctor.gender} setSex={setAttribute("sex")} />
        <BirthBox
          dateOfBirth={doctor.dateOfBirth}
          setDateOfBirth={setAttribute("dateOfBirth")}
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
        />
        <PhoneNumberBox
          isIconDisplay={!isCalendarOpen}
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
