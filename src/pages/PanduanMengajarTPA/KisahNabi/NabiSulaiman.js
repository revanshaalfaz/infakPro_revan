import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiSulaiman = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Sulaiman</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabisulaiman.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Sulaiman AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Nabi Sulaiman adalah salah satu Nabi yang terkenal sebagai raja yang kaya dan memiliki kekuasaan yang besar. Atas izin Allah, Nabi Sulaiman juga memiliki mukjizat antara lain:
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>
              1. Memiliki kekayaan yang berlimpah. Bahkan dalam suatu riwayat dikisahkan bahwa istana Nabi Sulaiman sangat luas dan bertabur batu mulia.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>2. Dapat berbicara dengan binatang.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>3. Mampu menundukkan angin.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>4. Memiliki bala tentara dari kalangan manusia, jin, dan hewan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px", marginBottom: "100px" }}>5. Mengalirkan tembaga dari perut bumi.</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiSulaiman;
