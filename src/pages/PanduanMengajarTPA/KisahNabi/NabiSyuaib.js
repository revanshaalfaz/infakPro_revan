import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiSyuaib = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-white overflow-y-auto" style={{ fontFamily: "poppins", overflowY: "scroll" }}>
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-between">
            <div className="flex justify-start">
              <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
            </div>
          </div>
          <div className="flex flex-col items-center mt-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Nabi</h1>
            <p className="text-[25px] font-bold mb-[15px]">Syuaib</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabisyuaib.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Syuaib AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Syuaib diutus Allah pada kaum Madyan, kaum yang suka menipu dan membangkang. Kaum penyembah pohon Ek yang besar dan rimbun. Selain itu mereka, senang sekali merampas harta musafir tak pernah ramah kepada sesama. Perbuatan
              mereka seakan membuat Nabi Syuaib geram karena tetap ingkar dan tak mengikuti Nabi Syuaib.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px", marginBottom: "100px" }}>
              Nabi Syuaib memohon kepada Allah untuk kaumnya yang semakin syirik dan bermaksiat. maka Allah memberikan ujian berupa badai panas, didatangkan guntur, awan hitam, hingga gempa bumi yang membinasakan. Kota Madyan hancur,
              orang-orang kafir terkubur di dalam rumah mereka sendiri.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiSyuaib;
