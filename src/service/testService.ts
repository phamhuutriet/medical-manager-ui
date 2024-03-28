import axios from "axios";
import { getHostName } from "../data/routeEnum";
import { getAccessToken, getAuthObject, getUserId } from "../utils/auth";

export const createTest = async (
  patientId: string,
  recordId: string,
  test: any
) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/${recordId}/tests/`;
  const formData = new FormData();
  formData.append("image", test.image);
  formData.append("name", test.name);
  formData.append("created_at", test.createdAt);
  formData.append("record_id", recordId);

  const response = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  return response.data;
};

export const updateTest = async (
  patientId: string,
  recordId: string,
  test: any
) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/${recordId}/tests/${
    test.id
  }/`;
  const isImageFile = test.image instanceof File;

  const formData = new FormData();

  if (isImageFile) formData.append("image", test.image);

  formData.append("name", test.name);
  formData.append("created_at", test.createdAt);
  formData.append("record_id", recordId);

  const response = await axios.patch(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  return response.data;
};

export const deleteTest = async (
  patientId: string,
  recordId: string,
  test: any
) => {
  const url = `${getHostName()}/user/${getUserId()}/patients/${patientId}/records/${recordId}/tests/${
    test.id
  }/`;
  await axios.delete(url, getAuthObject());
};

export const createUpdateTests = async (
  patientId: string,
  recordId: string,
  tests: any[]
) => {
  const requests: any[] = [];
  tests.forEach((test) => {
    if (test.id !== undefined && !test.isDelete) {
      requests.push(updateTest(patientId, recordId, test));
    } else if (test.id !== undefined) {
      requests.push(deleteTest(patientId, recordId, test));
    } else if (!test.isDelete) {
      requests.push(createTest(patientId, recordId, test));
    }
  });

  await Promise.all(requests);
};
