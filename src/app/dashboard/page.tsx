import Header from "@/components/Header";
import NeedAuth from "@/hoc/NeedAuth";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-[25px]">ĐÂY LÀ DASHBOARD ĐƯỢC PROTECTED</h1>
      </div>
    </>
  );
};

export default NeedAuth(Dashboard);
