import axios from "axios";

const BaseApiClient = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  });
};

export const baseApiClient = BaseApiClient();
