import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiNuh = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Nuh</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabinuh.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Nuh AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Nuh adalah salah satu Nabi yang masuk dalam golongan Ulul Azmi, artinya memiliki ketegaran. Selama berdakwah, Nabi Nuh menerima banyak tantangan dan penolakan. Dakwah tauhid Nabi Nuh banyak ditentang oleh kaumnya. Namun,
              beliau tetap berjuang untuk mengajak kaumnya untuk menyembah Allah SWT bukan patung berhala walaupun hanya sedikit saja kaumnya yang mengikuti jejaknya.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Selama 950 tahun, Nabi Nuh tetap bersabar dalam menyebarkan dakwahnya. Kemaksiatan dan kesyirikan terus merajalela. Tak ada yang mengindahkan nesehatnya, termasuk anak dan istrinya menentang ajaran beliau juga membenci
              suaminya Nabi Nuh dan menganggapnya gila. Ketika kaumnya tetap bertindak dzalim, Allah pun menurunkan azab banjir besar yang menimpa mereka semua.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px", marginBottom: "100px" }}>
              Ditengah badai banjir besar,Allah mendengarkan doa dan diperintahkan-Nya Nabi Nuh juga untuk membuat kapal besar dengan ukuran panjang 300 hasta dan 50 hasta, inilah mukjizat dari Allah karena bisa membuat kapal besar dengan
              waktu yang singkat.Umat yang mengikuti ajaran Nabi Nuh dan ikut naik ke dalam kapal baik manusia maupun binatang yang ada selamat dari banjir.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiNuh;
