import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getProfile } from "@/utils/auth";

const LoggedIn = (Component: JSX.ElementType) => async (props: any) => {
  const cookie = cookies();
  const user = await getProfile(cookie);
  if (user) return redirect("/dashboard");
  return <Component user={user} />;
};

export default LoggedIn;
