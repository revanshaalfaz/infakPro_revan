import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiAdam = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Adam</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabiadam.jpeg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Adam AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Adam merupakan nabi pertama sekaligus manusia pertama yang Allah ciptakan. Sebelumnya Nabi Adam tinggal di surga dengan pasangannya Hawa. Namun berkat hasutan iblis, Adam dan Hawa memakan buah khuldi yang telah dilarang
              oleh Allah. Apa yang terjadi? Belum sampai habis buah khuldi yang dimakan, aurat Adam dan Hawa terbuka.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Mereka sangat malu dan menyadari kesalahannya dengan segera menutupi tubuh dengan daun-daun tumbuhan surge. Meski telah bertaubat, Allah mengampuni dosa keduanya. Namun, mereka tak boleh lagi untuk tetap tinggal di surge.Allah
              tetap memerintahkan mereka turun ke bumi.Mereka sangat malu dan menyadari kesalahannya dengan segera menutupi tubuh dengan daun-daun tumbuhan surge. Meski telah bertaubat, Allah mengampuni dosa keduanya. Namun, mereka tak
              boleh lagi untuk tetap tinggal di surge.Allah tetap memerintahkan mereka turun ke bumi.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Disanalah mereka akan tinggal bersama anak cucu dan keturunannya, hingga Hari Kiamat tiba. Keduanya dianugerahi orang anak kembar laki-laki yang diberi nama Habil dan Qabil. Beberapa mukjizat Nabi Adam adalah:
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>1. Menjadi khalifah pertama di bumi.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>2. Diajarkan oleh Allah segala hal tentang ciptaan makhluk hidup dan benda mati yang ada di bumi.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>3. Memiliki umur yang panjang dan bisa memberikan 40 tahun untuk Nabi Daud. Memiliki tinggi 60 hasta.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>4. Dikaruniai keturunan kembar berpasang-pasangan laki-laki dan perempuan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px", marginBottom: "100px" }}>
              5. Diajarkan kepada kita umat Nabi Adam untuk tidak mudah terhasut oleh setan, disarankan untuk memperbanyak banyak bacaan taawuz sebelum melakukan tindakan sesuatu.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiAdam;
