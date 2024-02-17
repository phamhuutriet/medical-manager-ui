import React, { useContext, useState } from "react";
import { BirthBox, NameBox, PhoneNumberBox } from "../doctor-detail/NameBox";
import { Button } from "../../../components/Button";
import { SexDropDown } from "../doctor-detail/SexDropDown";
import { DoctorContext } from "../../../context/DoctorContext";
import { useNavigate } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import "./index.css";
import { AddDoctorAvatarBox } from "./AddDoctorAvatarBox";

const VALID_KEYS = [
  "firstName",
  "lastName",
  "sex",
  "dateOfBirth",
  "phoneNumber",
];

export const AddDoctorPageContent = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const { doctors, setDoctors } = useContext(DoctorContext);
  const [doctor, setDoctor] = useState<any>();
  const doctorKeys = Object.keys(doctor ? doctor : {});
  const isValidDoctor = VALID_KEYS.every((key) => doctorKeys.includes(key));
  const navigate = useNavigate();

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      setDoctor({ ...doctor, [attribute]: value });
    };
  };

  const saveDoctor = () => {
    setDoctors([...doctors, doctor]);
    navigate(RouteEnum.DOCTOR_PAGE);
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.DOCTOR_PAGE);
  };

  return (
    <div>
      <div className="doctor-detail-content">
        <AddDoctorAvatarBox />
        <NameBox
          doctor={doctor}
          setFirstName={setAttribute("firstName")}
          setLastName={setAttribute("lastName")}
        />
        <SexDropDown
          sex={doctor ? doctor.sex : ""}
          setSex={setAttribute("sex")}
        />
        <BirthBox
          dateOfBirth={doctor ? doctor.dateOfBirth : ""}
          setDateOfBirth={setAttribute("dateOfBirth")}
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
        />
        <PhoneNumberBox
          isIconDisplay={!isCalendarOpen}
          setPhoneNumber={setAttribute("phoneNumber")}
          doctorPhoneNumber={doctor ? doctor.phoneNumber : ""}
        />
      </div>
      <ButtonsBox
        isValidDoctor={isValidDoctor}
        saveDoctor={saveDoctor}
        cancelEditDoctor={cancelEditDoctor}
      />
    </div>
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
