import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiIdris = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Idris</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabiidris.png" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Idris AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Idris adalah cucu buyut Nabi Adam. Beliau sempat bertemu dengan Nabi Adam selama 308 tahun. Nabi Idris merupakan orang yang pertama kali memakai pakaian berjahit. Pada zaman Nabi Adam, orang-orang mengenakan bulu dan
              kulit binatang sebagai bahan pakaian mereka. Telah diriwayatkan kepada Nabi Idris adalah menjadi seorang penjahit.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Selain itu, beliau ahli ilmu astronomi yang menggunakan bintang sebagai petunjuk arah untuk memperkirakan kondisi cuaca serta memperkirakan waktu yang pas untuk bercocok tanam. Selama berdakwah, Nabi Idris memberikan pesan
              kepada kaumnya, antara lain nasihat untuk menjadikan sholat jenazah sebagai penghormatan.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px", marginBottom: "100px" }}>
              Selain itu juga menjadi nasihat untuk selalu bersyukur atas nikmat Allah, menghindari hasad dan dengki, melarang menumpuk harta yang tak bermanfaat, dan mematuhi perintah Allah dengan ikhlas, baik dalam sholat, berpuasa, dan
              amalan lainnya.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiIdris;
