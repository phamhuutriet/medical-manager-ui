import axios from "axios";
import { getHostName } from "../data/routeEnum";
import { getAuthObject, getUserId } from "../utils/auth";
import { Treatment } from "../data/dataTypes";

export const getAllTreatments = async (patientId: string, recordId: string) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/${recordId}/treatments/`;
  const { data } = await axios.get(url, getAuthObject());
  return data;
};

export const createTreatment = async (
  patientId: string,
  recordId: string,
  treatment: Treatment
) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/${recordId}/treatments/`;
  const { data } = await axios.post(
    url,
    { ...treatment, recordId, doctorId: treatment.doctor.id },
    getAuthObject()
  );
  return data;
};

export const updateTreatment = async (
  patientId: string,
  recordId: string,
  treatment: Treatment
) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/${recordId}/treatments/${
    treatment.id
  }/`;
  const { data } = await axios.post(url, treatment, getAuthObject());
  return data;
};

export const createUpdateTreatments = async (
  patientId: string,
  recordId: string,
  treatments: Treatment[]
) => {
  const requests: any[] = [];
  treatments.forEach((treatment) => {
    console.log("Treatment: ", treatment);
    if (treatment.id !== undefined) {
      console.log("update");
      requests.push(updateTreatment(patientId, recordId, treatment));
    } else {
      console.log("create");
      requests.push(createTreatment(patientId, recordId, treatment));
    }
  });

  await Promise.all(requests);
};
