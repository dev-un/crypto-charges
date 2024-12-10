import axios from "axios";
import { BASE_URL } from "@/api/constants";

const BaseApiClient = () => {
  return axios.create({ baseURL: BASE_URL });
};

export const baseApiClient = BaseApiClient();
