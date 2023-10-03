import { handleAuth } from "@/handle/handleAuth";
import { redirect } from "next/navigation";

const LoggedIn = (Component: React.FC) => async (props: any) => {
  const { user } = await handleAuth();
  if (user) return redirect("/dashboard");
  return <Component />;
};

export default LoggedIn;
