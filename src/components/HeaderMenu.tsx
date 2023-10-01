"use client";
import Link from "next/link";
import React from "react";
import { deleteCookie } from "cookies-next";

type Props = {
  user: any;
};

const HeaderMenu = ({ user }: Props) => {
  const handleSignOut = () => {
    deleteCookie("access_token");
    window.location.reload();
  };
  return (
    <ul className="h-[40px] space-x-4 flex">
      {!user && (
        <li className="w-[100px] flex items-center justify-center h-full bg-slate-200 rounded-[12px]">
          <Link
            href="/"
            className=" w-full h-full flex items-center justify-center"
          >
            Login
          </Link>
        </li>
      )}

      {user && (
        <>
          <li className="w-[100px] flex items-center justify-center h-full bg-slate-200 rounded-[12px]">
            <Link
              href="/dashboard"
              className=" w-full h-full flex items-center justify-center"
            >
              Dash Board
            </Link>
          </li>
          <li className="w-[100px] flex items-center justify-center h-full bg-slate-200 rounded-[12px]">
            <button
              className=" w-full h-full flex items-center justify-center"
              onClick={handleSignOut}
            >
              Đăng xuất
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default HeaderMenu;
