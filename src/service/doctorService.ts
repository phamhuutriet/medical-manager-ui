import axios from "axios";
import { getHostName } from "../data/routeEnum";
import { getAuthObject, getUserId } from "../utils/auth";
import { Doctor } from "../context/DoctorContext";

export const getAllDoctors = async () => {
  const url = `${getHostName()}/user/${getUserId()}/doctors/`;
  const { data } = await axios.get(url, getAuthObject());
  return data;
};

export const createDoctor = async (doctor: Doctor) => {
  // TODO: change this later -> maybe put into user data
  const roleId = "a8a22270-f512-43e2-9359-805869d226a0";
  const url = `${getHostName()}/user/${getUserId()}/doctors/`;
  const { data } = await axios.post(
    url,
    { ...doctor, roleId },
    getAuthObject()
  );
  return data;
};

export const updateDoctor = async (updatedDoctor: Doctor) => {
  const url = `${getHostName()}/user/${getUserId()}/doctors/${
    updatedDoctor.id
  }/`;
  const { data } = await axios.patch(url, updatedDoctor, getAuthObject());
  return data;
};

export const deleteDoctor = async (doctorId: string) => {
  const url = `${getHostName()}/user/${getUserId()}/doctors/${doctorId}/`;
  const { data } = await axios.delete(url, getAuthObject());
  return data;
};
