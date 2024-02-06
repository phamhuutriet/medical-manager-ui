import React from "react";
import "./index.css";
import { AvatarBox } from "./AvatarBox";
import { BirthBox, NameBox, PhoneNumberBox, SexBox } from "./NameBox";
import { Button } from "../../../components/Button";

export const DoctorDetailContent = () => {
  return (
    <div>
      <div className="doctor-detail-content">
        <AvatarBox />
        <NameBox />
        <SexBox />
        <BirthBox />
        <PhoneNumberBox />
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
