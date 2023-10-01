import FormLogin from "../components/FormLogin";
import LoggedIn from "@/hoc/LoggedIn";
import React from "react";
const Home = ({ user }: { user: any }) => {
  return (
    <>
      <FormLogin />
    </>
  );
};

export default LoggedIn(Home);
