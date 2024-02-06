import React from "react";
import { IconButton } from "@mui/material";
import { EditPatientIcon } from "../../../img/svg/EditPatientIcon";
import { ArrowDownIcon } from "../../../img/svg/ArrowDownIcon";
import { CalendarIcon } from "../../../img/svg/CalendarIcon";

export const NameBox = () => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Họ</div>
        <div className="content">
          <input value="Phạm" className="content-input" />
          <IconButton>
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#586EE0" />
          </IconButton>
        </div>
      </div>
      <div className="box-item">
        <div className="title">Tên</div>
        <div className="content">
          <input value="Triết" className="content-input" />
          <IconButton>
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#586EE0" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const SexBox = () => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Giới tính</div>
        <div className="content">
          <div style={{ width: "100%" }}>Nam</div>
          <IconButton sx={{ height: "100%" }}>
            <ArrowDownIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const BirthBox = () => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Ngày sinh</div>
        <div className="content">
          <div style={{ width: "100%" }}>02 / 12 / 1999</div>
          <IconButton sx={{ height: "100%" }}>
            <CalendarIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const PhoneNumberBox = () => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Số điện thoại</div>
        <div className="content">
          <div style={{ width: "100%" }}>+ 84 54 897 802</div>
          <IconButton sx={{ height: "100%" }}>
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
