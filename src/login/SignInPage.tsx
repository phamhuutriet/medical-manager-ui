import React, { useState } from "react";
import { TextInputBox } from "../mainPage/doctor/doctor-detail/NameBox";
import { isValidEmail } from "./SignUpPage";
import { RevealPasswordIcon } from "../img/svg/RevealPasswordIcon";
import { Button } from "../components/Button";
import { FormControlLabel } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import { CheckedBox } from "../img/svg/CheckedBox";
import { UncheckBox } from "../img/svg/UncheckBox";
import { signIn } from "../service/accessService";
import { useThrowAsyncError } from "../hooks/useThrowAsyncError";
import { setAccessToken, setUserId } from "../utils/auth";
import "./index.css";
import { WholeComponentLoadingWrapper } from "../components/LoadingWrapper";

export const SignInPage = ({ setIsSignedIn }: { setIsSignedIn: Function }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordReveal, setIsPasswordReveal] = useState(false);
  const [hasEmailChanged, setHasEmailChanged] = useState(false);
  const [hasPasswordChanged, setHasPasswordChanged] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const throwAsyncError = useThrowAsyncError();
  const isSignInButtonEnabled =
    hasEmailChanged &&
    isValidEmail(email) &&
    hasPasswordChanged &&
    password.length > 0;

  const onChangeEmail = (value: string) => {
    setHasEmailChanged(true);
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setHasPasswordChanged(true);
    setPassword(value);
  };

  const onClickSignIn = async () => {
    try {
      setIsSigningIn(true);
      const data = await signIn({ email, password });
      setAccessToken(data.accessToken);
      setUserId(data.userId);
      setIsSignedIn(true);
      setIsSigningIn(false);
    } catch (e) {
      throwAsyncError(new Error("Thông tin đăng nhập không hợp lệ"));
    }
    // Only navigate if path is defined
    // navigate(RouteEnum.MAIN_PAGE);
  };

  return (
    <div className="signup-page">
      <WholeComponentLoadingWrapper
        isLoading={isSigningIn}
        loadingText="Đang đăng nhập, vui lòng đợi trong giây lát"
      >
        <div className="singup-page-inner">
          <div className="signup-page-title-container">
            <div className="signup-page-titlte">
              Bắt đầu làm việc với Dentistry
            </div>
            <div className="signup-page-description">
              <div className="light-text">
                Hãy đăng nhập vào tài khoản Nha khoa của bạn để tiến hành sử
                dụng Dentistry nhé.
              </div>
              <div>
                hoặc <a href="signup">đăng ký</a> vào tài khoản của bạn
              </div>
            </div>
          </div>
          <div className="signup-page-input-container">
            <div className="signup-page-input-section">
              <TextInputBox
                text={email}
                setText={onChangeEmail}
                boxTitle="Địa chỉ email"
                placeholder="abc@gmail.com"
                isError={hasEmailChanged && !isValidEmail(email)}
                errorMessage="Lỗi cú pháp. Hãy kiểm tra lại"
              />
              <TextInputBox
                isPassword={!isPasswordReveal}
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
                isError={hasPasswordChanged && password.length === 0}
                errorMessage={<div>Mật khẩu không được để trống</div>}
                onClickIcon={() => setIsPasswordReveal((prev) => !prev)}
              />
            </div>
            <div className="agree-policy-box">
              <FormControlLabel
                control={
                  <CheckBox
                    checkedIcon={<CheckedBox />}
                    icon={<UncheckBox />}
                  />
                }
                label=""
                onClick={() => {}}
              />
              <div className="forgot-password-text">
                <div>Nhớ mật khẩu</div>
                <a href="/">Quên mật khẩu?</a>
              </div>
            </div>
          </div>
          <div className="buttons-rows">
            <Button
              className={`signup-button ${
                isSignInButtonEnabled && "is-enabled-button"
              }`}
              text="Đăng nhập"
              onClick={onClickSignIn}
              disable={!isSignInButtonEnabled}
            />
          </div>
        </div>
      </WholeComponentLoadingWrapper>
    </div>
  );
};
