import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiAyub = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Ayub</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabiayub.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Ayub AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Nabi Ayyub adalah seorang Nabi yang memiliki banyak harta, keturunan, dan berakhlak mulia. Meski begitu, Nabi Ayub tak pernah sombong dan terus berbuat baik. Allah pun menguji Nabi Ayub dengan cobaan yang berat. Dia harus
              kehilangan hartanya, anak-anaknya, dan menderita penyakit kulit. Namun dalam kondisi tersebut Nabi Ayyub tetap bersabar dan berserah diri pada Allah. Beberapa mukjizat Nabi Ayyub antara lain:
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>1. Memiliki kesabaran yang luar biasa.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px", marginBottom: "100px" }}>2. Mampu mengeluarkan air dari tanah yang bisa menyembuhkan penyakitnya.</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiAyub;
