import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaHafalanSuratPendek = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Kisah</h1>
            <p className="text-[25px] font-bold mb-[15px]">25 Nabi</p>
          </div>
        </div>
        <div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/NabiAdam">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon1.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Adam</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiIdris">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon2.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Idris</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiNuh">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon3.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Nuh</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiHud">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon4.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Hud</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiSholeh">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon5.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Sholeh</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiIbrahim">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon6.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Ibrahim</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiLuth">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon7.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Luth</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiIsmail">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon8.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Ismail</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiIshak">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon9.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Ishaq</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiYakub">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon10.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Yaqub</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiYusuf">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon11.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Yusuf</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiAyub">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon12.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Ayub</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiSyuaib">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon13.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Syuaib</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiMusa">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon14.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Musa</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiHarun">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon15.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Harun</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiZulkifli">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon16.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Dzulkifli</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiDaud">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon17.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Daud</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiSulaiman">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon18.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Sulaiman</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiIlyas">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon19.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Ilyas</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiIlyasa">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon20.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Ilyasa</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiYunus">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon21.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Yunus</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiZakaria">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon22.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Dzakaria</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiYahya">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon23.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Yahya</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/NabiIsa">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon24.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Isa</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[20px] mb-[100px]">
            <NavLink to="/NabiMuhammad">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon25.png" className="w-[45px] h-[45px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-4">Nabi Muhammad SAW</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaHafalanSuratPendek;
