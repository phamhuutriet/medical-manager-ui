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
import { WholeComponentLoadingWrapper } from "../components/LoadingWrapper";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { usePassword } from "../hooks/usePassword";
import "./index.css";
import {
  ButtonRows,
  Container,
  Description,
  ForgotPasswordText,
  Inner,
  InputContainer,
  InputSection,
  LightText,
  SubInputSection,
  Title,
  TitleContainer,
} from "./Styles";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../data/routeEnum";

export const SignInPage = ({ setIsSignedIn }: { setIsSignedIn: Function }) => {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword, isRememberPassword, setIsRememberPassword] =
    usePassword();
  const [isPasswordReveal, setIsPasswordReveal] = useState(false);
  const [hasEmailChanged, setHasEmailChanged] = useState(false);
  const [hasPasswordChanged, setHasPasswordChanged] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const throwAsyncError = useThrowAsyncError();
  const isSignInButtonEnabled = isValidEmail(email) && password.length > 0;
  const navigate = useNavigate();

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
      navigate(RouteEnum.MAIN_PAGE);
    } catch (e) {
      throwAsyncError(new Error("Thông tin đăng nhập không hợp lệ"));
    }
  };

  const onEnterPassword = async () => {
    setHasPasswordChanged(true);

    if (password.length !== 0) {
      await onClickSignIn();
    }
  };

  return (
    <Container>
      <WholeComponentLoadingWrapper
        isLoading={isSigningIn}
        loadingText="Đang đăng nhập, vui lòng đợi trong giây lát"
      >
        <Inner>
          <TitleContainer>
            <Title>Bắt đầu làm việc với Dentistry</Title>
            <Description>
              <LightText>
                Hãy đăng nhập vào tài khoản Nha khoa của bạn để tiến hành sử
                dụng Dentistry nhé.
              </LightText>
              <span>
                hoặc <a href="signup">đăng ký</a> vào tài khoản của bạn
              </span>
            </Description>
          </TitleContainer>

          <InputContainer>
            <InputSection>
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
                onEnter={onEnterPassword}
                id="password"
              />
            </InputSection>

            <SubInputSection>
              <FormControlLabel
                control={
                  <CheckBox
                    checkedIcon={<CheckedBox />}
                    icon={<UncheckBox />}
                  />
                }
                label=""
                checked={isRememberPassword}
                onClick={() => setIsRememberPassword((prev: any) => !prev)}
              />
              <ForgotPasswordText>
                <div>Nhớ mật khẩu</div>
                <a href="/">Quên mật khẩu?</a>
              </ForgotPasswordText>
            </SubInputSection>
          </InputContainer>

          <ButtonRows>
            <Button
              className={`signup-button ${
                isSignInButtonEnabled && "is-enabled-button"
              }`}
              text="Đăng nhập"
              onClick={onClickSignIn}
              disable={!isSignInButtonEnabled}
            />
          </ButtonRows>
        </Inner>
      </WholeComponentLoadingWrapper>
    </Container>
  );
};
