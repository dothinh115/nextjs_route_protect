import React from "react";
import HeaderMenu from "./HeaderMenu";
import { cookies } from "next/headers";
import { getProfile } from "@/utils/auth";
type Props = {};

const Header = async (props: Props) => {
  const cookie = cookies();
  const user = await getProfile(cookie);
  return (
    <>
      <div className="px-6 pt-4 text-black">
        <div className="p-2 rounded-[12px] bg-white">
          <HeaderMenu user={user} />
        </div>
      </div>
    </>
  );
};

export default Header;
