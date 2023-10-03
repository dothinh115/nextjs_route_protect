import { API_URL } from "@/utils/variables";
import { getCookie } from "cookies-next";
const useFetch = async (url: string, options?: RequestInit) => {
  const token = getCookie("access_token");
  if (process.browser)
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
};

export default useFetch;
