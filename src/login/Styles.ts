import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: var(--font-family);

  &.a {
    color: var(--color-text-brand);
    text-decoration-line: none;
  }

  &.a:hover {
    text-decoration-line: underline;
  }
`;

export const Inner = styled.div`
  max-width: 607px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-bottom: 44px;
`;

export const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  gap: 16px;
  line-height: 20px;
`;

export const LightText = styled.div`
  color: var(--color-text-secondary);
  max-width: 400px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
`;

export const SubInputSection = styled.div`
  width: 100%;
  display: flex;
  padding: 0px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  gap: 0px;

  &.MuiTypography-root {
    font-size: 14px;
    font-family: Be Vietnam Pro;
  }

  &.MuiCheckbox-root {
    padding: 0 0 0 0;
  }
`;

export const ForgotPasswordText = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonRows = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 24px;

  &.button-disable {
    background-color: var(--color-surface-secondary) !important;
  }

  &.button-disable:hover {
    background-color: var(--color-surface-secondary) !important;
  }
`;
