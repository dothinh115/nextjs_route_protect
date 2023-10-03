import { getAuth } from "@/customHooks/getAuth";
import { redirect } from "next/navigation";

const NeedAuth = (Component: React.FC) => async (props: any) => {
  const { user } = await getAuth();
  if (!user) return redirect("/");
  return <Component />;
};

export default NeedAuth;
