import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

export default function Inputs({ label, type, isSenha, isCSenha, isCpf }) {
  const [eye, setEye] = useState(false);
  const [eyeC, setEyeC] = useState(false);

  function setEyeClick() {
    if (eye) {
      setEye(false);
    } else {
      setEye(true);
    }
  }

  function setEyeCClick() {
    if (eyeC) {
      setEyeC(false);
    } else {
      setEyeC(true);
    }
  }

  return (
    <>
      {isSenha ? (
        <>
          <input
            type={`${eye ? "text" : "password"}`}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00bfa6] peer"
            placeholder=""
            required
          />
          <div
            onClick={setEyeClick}
            className="absolute right-0 -translate-y-7 cursor-pointer"
          >
            {!eye ? <EyeSlash size={22} /> : <Eye size={22} />}
          </div>
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#00bfa6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
            {label}
          </label>
        </>
      ) : isCpf ? (
        <>
          <input
            type={`${eyeC ? "text" : "password"}`}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00bfa6] peer"
            placeholder=""
            required
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#00bfa6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
            {label}
          </label>
        </>
      ) : isCSenha ? (
        <>
          <input
            type="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00bfa6] peer"
            placeholder=""
            required
          />
          <div
            onClick={setEyeCClick}
            className="absolute right-0 -translate-y-7 cursor-pointer"
          >
            {!eyeC ? <EyeSlash size={22} /> : <Eye size={22} />}
          </div>
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#00bfa6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
            Confirmação de Senha:
          </label>
        </>
      ) : (
        <>
          <input
            type={type}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00bfa6] peer"
            placeholder=""
            required
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#00bfa6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
            {label}
          </label>
        </>
      )}
    </>
  );
}
