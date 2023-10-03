import { cookies } from "next/headers";
import { handleFetch } from "./handleFetch";
export const handleAuth = async () => {
  const cookie = cookies();
  const token = cookie.get("access_token");
  const getProfile = async () => {
    if (token?.value) {
      const { data } = await handleFetch("/api/users/profile", {
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
  return { user };
};
