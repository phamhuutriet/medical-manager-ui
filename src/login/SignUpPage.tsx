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
  const [hasUsernamChanged, setHasUsernameChanged] = useState(false);
  const [hasEmailChanged, setHasEmailChanged] = useState(false);
  const [hasPasswordChanged, setHasPasswordChanged] = useState(false);
  const [isCheckedPolicy, setIsCheckedPolicy] = useState(false);

  const isSignupButtonEnable =
    hasUsernamChanged &&
    username.length > 0 &&
    hasEmailChanged &&
    isValidEmail(email) &&
    hasPasswordChanged &&
    isValidPassword(password) &&
    isCheckedPolicy;

  const onChangeUsername = (value: string) => {
    setHasUsernameChanged(true);
    setUsername(value);
  };

  const onChangeEmail = (value: string) => {
    setHasEmailChanged(true);
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setHasPasswordChanged(true);
    setPassword(value);
  };

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
            <div>
              hoặc <a href="login">đăng nhập</a> vào tài khoản của bạn
            </div>
          </div>
        </div>
        <div className="signup-page-input-container">
          <div className="signup-page-input-section">
            <TextInputBox
              text={username}
              setText={onChangeUsername}
              boxTitle="Tên đăng nhập"
              placeholder="Tên đăng nhập"
              isError={hasUsernamChanged && username.length === 0}
              errorMessage="Tên đăng nhập không được để trống"
            />
            <TextInputBox
              text={email}
              setText={onChangeEmail}
              boxTitle="Địa chỉ email"
              placeholder="abc@gmail.com"
              isError={hasEmailChanged && !isValidEmail(email)}
              errorMessage="Lỗi cú pháp. Hãy kiểm tra lại"
            />
            <TextInputBox
              isPassword
              text={password}
              setText={onChangePassword}
              boxTitle="Mật khẩu"
              placeholder="****"
              icon={
                <RevealPasswordIcon
                  defaultColor="#8C949D"
                  selectedColor="black"
                />
              }
              isError={hasPasswordChanged && !isValidPassword(password)}
              errorMessage={
                <div>
                  <div>
                    Mật khẩu của bạn không hợp lệ. Vui lòng kiểm tra và thử lại
                    theo các yêu cầu sau:
                  </div>
                  <li>Mật khẩu cần có ít nhất 8 ký tự.</li>
                  <li>Mật khẩu cần chứa ít nhất một chữ thường (a-z).</li>
                  <li>Mật khẩu cần chứa ít nhất một chữ hoa (A-Z).</li>
                  <li>Mật khẩu cần chứa ít nhất một số (0-9).</li>
                  <li>
                    Mật khẩu cần chứa ít nhất một ký tự đặc biệt (ví dụ: @, #,
                    $).
                  </li>
                </div>
              }
            />
          </div>
          <div className="agree-policy-box">
            <FormControlLabel
              control={
                <CheckBox checkedIcon={<CheckedBox />} icon={<UncheckBox />} />
              }
              label=""
              onClick={() => setIsCheckedPolicy((prev) => !prev)}
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
          <Button
            className={`signup-button ${
              isSignupButtonEnable && "is-enabled-button"
            }`}
            text="Đăng ký"
            onClick={() => {}}
            disable={!isSignupButtonEnable}
          />
        </div>
      </div>
    </div>
  );
};

const isValidEmail = (email: string) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
};

const isValidPassword = (password: string) => {
  // Password length should be at least 8 characters
  if (password.length < 8) {
    return false;
  }

  // Password should contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Password should contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Password should contain at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // Password should contain at least one special character
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return false;
  }

  // If all conditions are met, password is valid
  return true;
};
