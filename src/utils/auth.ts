import { AuthEnum } from "../data/authEnum";

export const getAuthObject = () => {
  return {
    headers: {
      "local-authorization": getAccessToken(),
      "x-client-id": getUserId(),
    },
  };
};

export const getAccessToken = () => {
  return localStorage.getItem(AuthEnum.ACCESS_TOKEN);
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(AuthEnum.ACCESS_TOKEN, accessToken);
};

export const removeAccessToken = () => {
  return localStorage.removeItem(AuthEnum.ACCESS_TOKEN);
};

export const getUserId = () => {
  return localStorage.getItem(AuthEnum.USER_ID);
};

export const setUserId = (userId: string) => {
  localStorage.setItem(AuthEnum.USER_ID, userId);
};
