import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiSholeh = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Sholeh</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabishaleh.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Sholeh AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Saleh hidup di tengah kaum Tsamud. Mereka adalah kaum yang banyak diberi kenikmatan oleh Allah. Kaum tsamud dikenal sebagai ahli bangunan yang tekun dan terampil dalam membuat rumah.Sekitar kurun waktu 200 tahun, Allah
              pun mengutus Nabi Shaleh ke kaum Tsamud yang masih merupakan keturunan dari kaum ‘Ad. Sayangnya, semua kenikmatan yang didapatkan kaum Tsamud itu tanpa diiringi rasa bersyukur kepada Allah.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Mereka sangat sombong dengan kekayaanya yang digunakan untuk berbuat maksiat hingga lupa kepada sang pencipta-Nya. Allah mengutus Nabi Shaleh untuk memberi peringatan kepada mereka, kata mereka Nabi Shaleh terkena sihir.
              Akhirnya membuat satu permintaan kepada Nabi Shaleh untuk meminta seekor unta betina yang sedang hamil tua dengan ciri-ciri yang aneh. Allah pun mengabulkan permintaan doa yang diminta sesuai dengan permintaan kaum Tsamud.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Mereka pun takjub dengan kehadiran unta persis seperti permintaanya. Unta pun diberi hak untuk minum dari sumber air yang ada di tengah kaum Tsamud. Suatu hari, kaum tsamud ingkar hingga memotong nadi unta sampai jatuh ke
              tanah dan menyerang unta. Nabi Shaleh tahu dan geram kepada mereka karena telah mengingkari janjinya. Mereka juga merencanakan hal yang lebih keji untuk menyerang Nabi Shaleh di malam harinya.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Allah menurunkan azab kepada kaum Tsamud dengan memerintahkan kepada para malaikat untuk melempar batu kepada sejumlah orang yang akan menyerang Nabi Shaleh. Kejadian itu pun membuat sebagian kaum Tsamud menerima dakwah Nabi
              Shaleh dan menjadi pengikutnya. Namun sebagian lagi masih ingkar, bahkan membunuh unta yang menjadi mukjizat tersebut.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px", marginBottom: "100px" }}>
              Setelah berhasil membunuh unta, Allah pun membinasakan mereka dengan hantaman petir di malam hari. Salah satu mukjizat Nabi Shaleh adalah memunculkan unta betina yang hamil 10 bulan dari batu besar yang terbelah.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiSholeh;
