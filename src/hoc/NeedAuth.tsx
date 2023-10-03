import UseAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const NeedAuth = (Component: any) => async (props: any) => {
  const { user } = await UseAuth();
  if (!user) return redirect("/");
  return <Component user={user} />;
};

export default NeedAuth;
