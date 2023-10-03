import { API_URL } from "@/utils/variables";
import { getCookie } from "cookies-next";
export default async function useFetch(url: string, options?: RequestInit) {
  const token = getCookie("access_token");
  const isServer = typeof window === "undefined";

  if (!isServer)
    options = {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token && {
          authorization: "Bearer " + token,
        }),
      },
    };
  url = API_URL + url;
  const response = await fetch(url, options);
  const data = await response.json();
  return { data };
}
