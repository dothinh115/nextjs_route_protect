import FormLogin from "../components/FormLogin";
import LoggedIn from "@/hoc/LoggedIn";
import React from "react";

const Home = () => {
  return (
    <>
      <FormLogin />
    </>
  );
};

export default LoggedIn(Home);
