import React from "react";
import HeaderMenu from "./HeaderMenu";
import { useAuth } from "@/hooks/useAuth";
type Props = {};

const Header = async (props: Props) => {
  const { user } = await useAuth();
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
