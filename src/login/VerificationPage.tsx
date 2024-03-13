import React from "react";
import { LogoComponent } from "../mainPage/sidebar/Logo";
import { Button } from "../components/Button";

export const VerificationPage = () => {
  return (
    <div className="verification-page">
      <div className="verification-page-inner">
        <LogoComponent isCollapsed={false} />
        <div className="verifcation-page-content">
          <div className="verifcation-page-block">
            <div className="verifcation-page-title">
              Vui lòng xác minh email của bạn
            </div>
            <div className="verifcation-page-description">
              Gần đến đó rồi! Chúng tôi đã gửi cho bạn một email đến địa chỉ bạn
              đã cung cấp. Vui lòng nhấp vào liên kết trong email để xác minh và
              sau đó đăng nhập.
            </div>
          </div>
          <div className="verifcation-page-block">
            <div className="verify-button-description">
              Nếu bạn không thấy nó, bạn có thể gửi lại xác nhận.
            </div>
            <Button
              className="verify-button"
              text="Gửi lại email xác nhận"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
