import axios from "axios";
import { getHostName } from "../data/routeEnum";
import { getAuthObject, getUserId } from "../utils/auth";
import { Doctor } from "../context/DoctorContext";

export const getAllDoctors = async () => {
  const url = `${getHostName()}/user/${getUserId()}/doctors/`;
  const { data } = await axios.get(url, getAuthObject());
  console.log("DOCTORS: ", data.metadata);
  return data.metadata;
};

export const createDoctor = async (doctor: Doctor) => {
  // TODO: change this later
  const roleId = "a8a22270-f512-43e2-9359-805869d226a0";
  const url = `${getHostName()}/user/${getUserId()}/doctors/`;
  const { data } = await axios.post(
    url,
    { ...doctor, roleId },
    getAuthObject()
  );
  return data.metadata;
};
