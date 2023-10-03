import { API_URL } from "@/utils/variables";

const useFetch = async (url: string, options?: RequestInit) => {
  url = API_URL + url;
  const response = await fetch(url, options);
  const data = await response.json();
  return { data };
};

export default useFetch;
