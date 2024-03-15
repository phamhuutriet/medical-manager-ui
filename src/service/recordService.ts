import axios from "axios";
import { getHostName } from "../data/routeEnum";
import { getAuthObject, getUserId } from "../utils/auth";
import { Record } from "../data/dataTypes";

export const getAllRecords = async (patientId: string) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/`;
  const { data } = await axios.get(url, getAuthObject());
  return data;
};

export const addRecord = async (record: Record, patientId: string) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/`;
  const { data } = await axios.post(url, record, getAuthObject());
  return data;
};

export const getRecord = async (patientId: string, recordId: string) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/${recordId}/`;
  const { data } = await axios.get(url, getAuthObject());
  return data;
};

export const updateRecord = async (record: Record) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${
    record.patientId
  }/records/${record.id}/`;
  const { data } = await axios.patch(url, record, getAuthObject());
  return data;
};
