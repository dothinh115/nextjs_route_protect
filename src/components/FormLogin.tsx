"use client";
import { useState } from "react";
import { login } from "@/utils/auth";

export interface ILogin {
  email: string;
  password: string;
}
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export default function FormLogin() {
  const [formLogin, changeFormLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [formError, changeFormError] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: { target: HTMLInputElement }) => {
    const key = event.target.getAttribute("data-id");
    const inputData = event.target.value;
    if (!key) return;
    changeFormLogin({
      ...formLogin,
      [key]: inputData,
    });
    //validation
    let error = "";
    if (!inputData.match(emailPattern)) error = "Email phải đúng định dạng!";
    if (inputData === "") error = "Không được để trống!";
    changeFormError({
      ...formError,
      [key]: error,
    });
  };

  const handleSubmitLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(formLogin);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full text-black">
      <div className="p-4 rounded-[12px] bg-white w-[350px]">
        <form className="space-y-3" onSubmit={handleSubmitLogin}>
          <h1 className="text-[32px] ">Đăng nhập</h1>
          <div className="h-[1px] bg-slate-200"></div>
          <div className="space-y-2">
            <h2 className="text-[14px]">Email</h2>
            <input
              type="text"
              className="p-2 border border-slate-400 rounded-[6px] w-full outline-none"
              data-id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-[14px]">Mật khẩu</h2>
            <input
              type="password"
              className="p-2 border border-slate-400 rounded-[6px] w-full outline-none"
              data-id="password"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-end">
            <button className="rounded-[6px] bg-slate-600 text-white p-2 hover:bg-slate-800">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
