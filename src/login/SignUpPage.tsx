import React, { useState } from "react";
import "./index.css";
import { TextInputBox } from "../mainPage/doctor/doctor-detail/NameBox";
import { RevealPasswordIcon } from "../img/svg/RevealPasswordIcon";
import { FormControlLabel } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import { CheckedBox } from "../img/svg/CheckedBox";
import { UncheckBox } from "../img/svg/UncheckBox";
import { Button } from "../components/Button";

export const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-page">
      <div className="singup-page-inner">
        <div className="signup-page-title-container">
          <div className="signup-page-titlte">
            Bắt đầu làm việc với Dentistry
          </div>
          <div className="signup-page-description">
            <div className="light-text">
              Hãy giúp bạn thiết lập để quản lý của mình. Tất cả bắt đầu bằng
              việc tạo một tài khoản Nha khoa.
            </div>
            <div>hoặc đăng nhập vào tài khoản của bạn</div>
          </div>
        </div>
        <div className="signup-page-input-container">
          <div className="signup-page-input-section">
            <TextInputBox
              text={username}
              setText={setUsername}
              boxTitle="Tên đăng nhập"
              placeholder="Tên đăng nhập"
            />
            <TextInputBox
              text={email}
              setText={setEmail}
              boxTitle="Địa chỉ email"
              placeholder="abc@gmail.com"
            />
            <TextInputBox
              isPassword
              text={password}
              setText={setPassword}
              boxTitle="Mật khẩu"
              placeholder="****"
              icon={
                <RevealPasswordIcon
                  defaultColor="#8C949D"
                  selectedColor="black"
                />
              }
            />
          </div>
          <div className="agree-policy-box">
            <FormControlLabel
              control={
                <CheckBox checkedIcon={<CheckedBox />} icon={<UncheckBox />} />
              }
              label=""
              onClick={() => {}}
            />
            <div className="agree-policy-text">
              Tôi đồng ý với{" "}
              <a href="www.google.com">
                các điều khoản và điều kiện của Dentistry
              </a>{" "}
              cũng như <a href="www.google.com">chính sách quyền riêng tư</a>{" "}
            </div>
          </div>
        </div>
        <div className="buttons-rows">
          <Button className="signup-button" text="Đăng ký" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
