import React, { useState } from "react";
import AuthenticatedAdmin from "../../Layouts/AuthenticatedAdmin";
import { ref, set, update } from "firebase/database";
import { database } from "../../Database/Fire";
import { NavLink, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedAdmin>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[18px] shadow-md shadow-black">
          <h1 className="text-[32px] font-semibold text-center">Menu Admin</h1>
          <h3 className="text-[17px] mt-[0px] text-center">Kelola Data Keuangan dan Pengguna</h3>
        </div>
        <div className="px-[15px] mt-[30px]">
          <NavLink to="/AdminKeuangan">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/tabelkeseluruhan.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-5" />
              <h1 className="text-[22px] font-bold text-left text-black">Kelola Data Keuangan</h1>
            </div>
          </NavLink>
        </div>
        <div className="px-[15px] mt-[30px]">
          <NavLink to="/AdminPengguna">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/kelolauser.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-5" />
              <h1 className="text-[22px] font-bold text-left text-black">Kelola Data Pengguna</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </AuthenticatedAdmin>
  );
};

export default AdminPage;
