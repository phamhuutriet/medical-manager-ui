import React, { useState } from "react";
import "./index.css";
import { AvatarBox } from "./AvatarBox";
import { BirthBox, NameBox, PhoneNumberBox } from "./NameBox";
import { Button } from "../../../components/Button";
import { SexDropDown } from "./SexDropDown";

export const DoctorDetailContent = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="doctor-detail-content">
        <AvatarBox />
        <NameBox />
        <SexDropDown />
        <BirthBox
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
        />
        <PhoneNumberBox isIconDisplay={!isCalendarOpen} />
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
