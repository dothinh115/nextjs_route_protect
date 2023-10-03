import { cookies } from "next/headers";
import UseFetch from "./useFetch";
export default async function useAuth() {
  const cookie = cookies();
  const token = cookie.get("access_token");
  const getProfile = async () => {
    if (token?.value) {
      const { data } = await UseFetch("/api/users/profile", {
        headers: {
          authorization: "Bearer " + token.value,
        },
        next: {
          revalidate: 3600,
        },
      });
      if (data.result) return data.result;
    }
    return null;
  };
  const user = await getProfile();
  return { user, token };
}
