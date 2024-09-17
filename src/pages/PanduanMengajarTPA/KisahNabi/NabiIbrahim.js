import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiIbrahim = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Ibrahim</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabiibrahim.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Ibrahim AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Ibrahim merupakan salah satu Nabi yang kisahnya banyak diceritakan dalam Al-Qur’an. Mulai dari bagaimana Nabi Ibrahim menemukan Tuhan, melawan kedzaliman Raja Namrud, hingga kisahnya dengan kedua anaknya yakni Ismail dan
              Ishaq. Pada zaman Nabi Ibrahim, terciptalah patung berhala paling besar dan menghancurkan semua berhala yang telah dibangun oleh ayahnya Raja Namrud dengan menggunakan kapak.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Saking marahnya kepada Nabi Ibrahim, para pengikut raja menyuruhnya untuk mengumpulkan kayu bakar dan sebuah bangunan untuk membakar Nabi Ibrahim. Namun, setelah menyiapkan semua itu dan telah membakar Nabi Ibrahim hidup-hidup
              tak akan mempan kerana telah dilindungi Allah. Ibrahim pernah meminta pada Allah untuk menyaksikan bagaimana cara Allah menghidupkan kembali makhluk yang sudah mati.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Maka saat itu pula Nabi melihat burung yang sudah mati bisa hidup kembali. Menurut kitab “Qashash al Anbiyaa”, Nabi Ibrahim pernah mengambil gundukan pasir yang kemudian berubah menjadi bahan makanan saat beliau sampai di
              rumah. Nabi Ibrahim sudah lama menantikan hadirnya anak.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Di saat usianya 99 tahun, Allah menjawab segala doanya dengan kelahiran Ismail dan Ishaq. Kedua putranya juga menjadi Nabi dan menurunkan keturunan yang juga menjadi Nabi. Karena itulah, Nabi Ibrahim dijuluki sebagai Abul
              Anbiyaa yang berarti Bapak Para Nabi. Mukjizat yang dimiliki oleh Nabi Ibrahim:
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>1. Tetap hidup walau dibakar oleh Raja Namrud</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>2. Bisa menghidupkan burung yang sudah mati</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>3. Mengubah pasir menjadi makanan</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>4. Diberi anak oleh Allah ketika usianya sudah senja</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px", marginBottom: "100px" }}>5. Dijuluki ‘Bapak’ para nabi karena ketaatannya kepada Allah</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiIbrahim;
