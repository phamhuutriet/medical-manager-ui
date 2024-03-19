import axios from "axios";
import { getHostName } from "../data/routeEnum";
import { getAuthObject, getUserId } from "../utils/auth";
import { Patient } from "../context/PatientContext";

export const getAllPatients = async () => {
  const url = `${getHostName()}/user/${getUserId()}/patients/`;
  const { data } = await axios.get(url, getAuthObject());
  return data;
};

export const updatePatientService = async (patient: Patient) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patient.id}/`;
  const { data } = await axios.patch(url, patient, getAuthObject());
  return data;
};

export const deletePatientService = async (patient: Patient) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patient.id}/`;
  await axios.delete(url, getAuthObject());
};

export const createPatient = async (patient: Patient) => {
  const postObj = { ...patient, doctorId: patient.doctor.id };
  const url = `${getHostName()}/user/${getUserId()}/patients/`;
  const { data } = await axios.post(url, postObj, getAuthObject());
  return data;
};
