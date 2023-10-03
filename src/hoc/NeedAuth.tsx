import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const NeedAuth = (Component: any) => async (props: any) => {
  const { user } = await useAuth();
  if (!user) return redirect("/");
  return <Component user={user} />;
};

export default NeedAuth;
