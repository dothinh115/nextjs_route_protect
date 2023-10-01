import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from "./variables";
import { getCookie } from "cookies-next";
const token = getCookie("access_token");
export const API: AxiosInstance = axios.create({
  baseURL: API_URL,
  ...(token && {
    headers: {
      authorization: "Bearer " + token,
    },
  }),
});
API.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
