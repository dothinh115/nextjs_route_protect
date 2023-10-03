import { getAuth } from "@/customHooks/getAuth";
import { redirect } from "next/navigation";

const LoggedIn = (Component: React.FC) => async (props: any) => {
  const { user } = await getAuth();
  if (user) return redirect("/dashboard");
  return <Component />;
};

export default LoggedIn;
