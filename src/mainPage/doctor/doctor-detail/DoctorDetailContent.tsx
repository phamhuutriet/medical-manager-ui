import React, { useContext, useState } from "react";
import "./index.css";
import { AvatarBox } from "./AvatarBox";
import { BirthBox, NameBox, PhoneNumberBox } from "./NameBox";
import { Button } from "../../../components/Button";
import { SexDropDown } from "./SexDropDown";
import { DoctorContext } from "../../../context/DoctorContext";

export const DoctorDetailContent = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const { doctorId, doctors, setDoctors } = useContext(DoctorContext);
  const currentDoctor = doctors.find((doctor) => doctor.id === doctorId);

  const setSex = (sex: any) => {
    setDoctors(
      doctors.map((doctor) => {
        if (doctor.id === doctorId) {
          return { ...doctor, sex };
        }
        return doctor;
      })
    );
  };

  if (!currentDoctor) {
    return <>Error no doctor</>;
  }

  return (
    <div>
      <div className="doctor-detail-content">
        <AvatarBox />
        <NameBox doctor={currentDoctor} />
        <SexDropDown sex={currentDoctor.sex} setSex={setSex} />
        <BirthBox
          dateOfBirth={currentDoctor.dateOfBirth}
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
        />
        <PhoneNumberBox
          isIconDisplay={!isCalendarOpen}
          doctorPhoneNumber={currentDoctor.phoneNumber}
        />
      </div>
      <ButtonsBox />
    </div>
  );
};

const ButtonsBox = () => {
  return (
    <div className="buttons-box">
      <Button
        text="Huỷ"
        className="cancel-button"
        onClick={() => {}}
        innerButtonClassName="cancel-button-inner"
      />
      <Button
        text="Lưu"
        className="save-button"
        onClick={() => {}}
        innerButtonClassName="save-button-inner"
      />
    </div>
  );
};
