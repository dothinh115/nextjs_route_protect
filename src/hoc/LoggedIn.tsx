import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const LoggedIn = (Component: JSX.ElementType) => async (props: any) => {
  const { user } = await useAuth();
  if (user) return redirect("/dashboard");
  return <Component user={user} />;
};

export default LoggedIn;
