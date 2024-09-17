import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiIsa = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Isa</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabiisa.jpeg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Isa AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Di saat usianya 99 tahun, Allah menjawab segala doanya dengan kelahiran Ismail dan Ishaq. Kedua putranya juga menjadi Nabi dan menurunkan keturunan yang juga menjadi Nabi. Karena itulah, Nabi Ibrahim dijuluki sebagai Abul
              Anbiyaa yang berarti Bapak Para Nabi. Mukjizat yang dimiliki oleh Nabi Ibrahim:
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>1. Bisa berbicara saat bayi.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>
              2. Karena lahir tanpa ayah, Maryam dituduh telah melakukan zina. Namun atas izin Allah, Nabi Isa yang masih bayi pun mampu melindungi ibunya dengan berbicara bahwa beliau adalah hamba Allah yang akan menjadi Nabi dan
              dianugerahi kitab Injil.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>3. Menghidupkan burung dari tanah liat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>4. Menghidupkan orang yang sudah mati.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>5. Menyembuhkan orang buta dan penyakit sopak.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>6. Menurunkan hidangan dari langit.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px", marginBottom: "100px" }}>7. Dianugerahi kitab Injil.</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiIsa;
