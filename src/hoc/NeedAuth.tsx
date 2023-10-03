import { handleAuth } from "@/handle/handleAuth";
import { redirect } from "next/navigation";

const NeedAuth = (Component: React.FC) => async (props: any) => {
  const { user } = await handleAuth();
  if (!user) return redirect("/");
  return <Component />;
};

export default NeedAuth;
