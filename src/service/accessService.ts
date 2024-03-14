import axios from "axios";
import { getHostName } from "../data/routeEnum";
import { SignInData, SignUpData } from "../data/dataTypes";

export const signUp = async (signUpData: SignUpData) => {
  const url = `${getHostName()}/access/signup/`;
  const { data } = await axios.post(url, signUpData);
  return data;
};

export const signIn = async (signInData: SignInData) => {
  const url = `${getHostName()}/access/signin/`;
  const { data } = await axios.post(url, signInData);
  return data.metadata;
};
