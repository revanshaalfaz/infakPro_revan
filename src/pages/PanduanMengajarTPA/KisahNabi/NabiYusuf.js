import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiYusuf = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Yusuf</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabiyusuf.png" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Yusuf AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Yusuf merupakan anak Nabi Yaqub. Dia pernah mendapat mimpi di mana bulan, matahari, dan bintang bersujud padanya. Sejak itulah, Nabi Yakub mengetahui bahwa putranya akan menjadi orang besar. Nabi Yusuf mendapatkan cobaan
              akan dimasukkan saudaranya ke sebuah sumur,tempat musafir melepas dahaga.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Yusuf ditemukan oleh musafir, lalu dijual dengan harga murah. Pembelinya adalah seorang pesohor Mesir yang bergelar Al-Aziz. Yusuf yang dirawat oleh istri Al-Aziz bernama Zulaikha sangat tertarik kepadanya. Ia pun tertarik
              kepada Nabi Yusuf, sehingga difitnah dan dimasukkan ke dalam penjara. Namun, ketika di dalam penjara Nabi Yusuf menitipkan sebuah pesan kepada seorang pelayan.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Kala itu musim paceklik, raja Mesir mendapat sebuah mimpi aneh dan ia tak paham akan maksud dari kalimat yang ada dalam mimpinya. Pelayan pun teringat kepada Nabi Yusuf yang merupakan ahli tafsir dan mengartikan mimpi sang
              raja untuk menghadapi musim paceklik. Nabi Yusuf juga memiliki mukjizat antara lain:
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>
              1. Memiliki paras yang tampan. Bahkan dalam kisahnya, para wanita pernah mengiris jarinya sendiri saat terpesona dengan ketampanan Nabi Yusuf.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px", marginBottom: "100px" }}>
              2. Mampu menafsirkan mimpi. Nabi Yusuf perah menafsirkan mimpi Raja dan akhirnya diangkat sebagai pejabat di Mesir.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiYusuf;
