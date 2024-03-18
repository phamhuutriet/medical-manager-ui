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
  const url = `${getHostName()}/user/${getUserId()}/doctors/`;
  const { data } = await axios.post(url, doctor, getAuthObject());
  return data;
};

export const updateDoctorService = async (updatedDoctor: Doctor) => {
  const url = `${getHostName()}/user/${getUserId()}/doctors/${
    updatedDoctor.id
  }/`;
  const { data } = await axios.patch(url, updatedDoctor, getAuthObject());
  return data;
};

export const deleteDoctorService = async (doctorId: string) => {
  const url = `${getHostName()}/user/${getUserId()}/doctors/${doctorId}/`;
  const { data } = await axios.delete(url, getAuthObject());
  return data;
};
