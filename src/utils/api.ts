import axios from "axios";
import { getHostName } from "../data/routeEnum";
import { getAuthObject } from "./auth";

const get = async (url: string, queryParams: object) => {
  const callUrl = `${getHostName()}${url}`;
  const { data } = await axios.get(callUrl, getAuthObject());
  return data;
};

const api = {
  get,
};

export default api;
