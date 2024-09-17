import React from "react";
import { NavLink } from "react-router-dom";

const BoxPemasukan = ({ judul, nominal }) => {
  return (
    <NavLink to="">
      <div className="w-full px-[27px] py-[15px] bg-[#0C8F8F] rounded-[20px]">
        <h2 className="text-[16px] font-semibold">{judul}</h2>
        <h1 className="text-[28px] font-semibold mt-[5px]">{nominal}</h1>
      </div>
    </NavLink>
  );
};

export default BoxPemasukan;
