import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getProfile } from "@/utils/auth";
const NeedAuth = (Component: any) => async (props: any) => {
  const cookie = cookies();
  const user = await getProfile(cookie);
  if (!user) return redirect("/");
  return <Component user={user} />;
};

export default NeedAuth;
