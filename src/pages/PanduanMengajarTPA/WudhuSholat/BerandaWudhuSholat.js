import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaWudhuSholat = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Wudhu</h1>
            <p className="text-[25px] font-bold mb-[15px]">dan Sholat</p>
          </div>
        </div>
        <div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/TataCaraWudhu">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon1.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Tata Cara Wudhu</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/PembatalWudhu">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon2.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Pembatal Wudhu</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/SyaratSholat">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon3.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Syarat-syarat Sholat</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/RukunSholat">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon4.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Rukun Sholat</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/TataCaraSholat">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon5.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Tata Cara Sholat</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[30px] mb-[100px]">
            <NavLink to="/PembatalSholat">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon6.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Pembatal Sholat</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaWudhuSholat;
