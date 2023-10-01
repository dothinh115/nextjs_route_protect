import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { API_URL } from "./variables";
import { ILogin } from "@/components/FormLogin";
import { setCookie } from "cookies-next";
import { API } from "./API";

export const getProfile = async (cookie: ReadonlyRequestCookies) => {
  const token = cookie.get("access_token");
  if (token?.value) {
    const dataResponse = await fetch(`${API_URL}/api/users/profile`, {
      headers: {
        authorization: "Bearer " + token.value,
      },
      next: {
        revalidate: 3600,
      },
    });
    const response = await dataResponse.json();
    if (response.result) return response.result;
  }
  return null;
};

export const login = async (dataLogin: ILogin) => {
  try {
    const loginResponse: { result: { accessToken: string } } = await API.post(
      "/api/signIn",
      dataLogin
    );
    const { accessToken } = loginResponse.result;
    setCookie("access_token", accessToken);
  } catch (error) {
    console.log(error);
  }
};
