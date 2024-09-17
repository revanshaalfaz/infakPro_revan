import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const PembatalWudhu = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Pembatal</h1>
            <p className="text-[25px] font-bold mb-[15px]">Wudhu</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/pembatalwudhu.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hal-Hal yang Membatalkan Wudhu</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : Kemenag(2020)</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Dilansir dari Buku "Ayo, Berwudhu dengan benar!" dari Kementerian Agama RI, kita sebagai muslim harus mengetahui apa saja hal yang membatalkan wudhu, sebab wudhu termasuk bagian dari syarat sah ibadah sholat.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Hal tersebut terdapat dalam riwayat hadis Rasulullah Saw.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>"Allah tidak menerima salat salah seorang kamu bila berhadas sampai ia berwudhu." (HR Bukhari)</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Selain itu, wudhu juga merupakan bagian dari taharah yang bermakna suci dari hadas dan najis, baik yang bersifat terlihat maupun tidak.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Buang Angin (Kentut)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Buang angin atau kentut adalah keluarnya gas dari tubuh melalui anus. Proses ini dianggap membatalkan wudu karena gas yang keluar membawa najis, sehingga wudu yang sebelumnya dilakukan menjadi tidak sah dan harus diulangi.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Buang Air Kecil atau Buang Air Besar</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Mengeluarkan urine atau tinja dari tubuh merupakan salah satu hal yang membatalkan wudu. Kedua proses ini melibatkan keluarnya kotoran dari tubuh, yang secara otomatis membatalkan kesucian wudu yang telah dilakukan sebelumnya.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>3. Menyentuh Kubul atau Dubur dengan Telapak Tangan</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Menyentuh area kemaluan atau anus dengan telapak tangan juga membatalkan wudu. Hal ini karena sentuhan langsung pada bagian tubuh yang mengeluarkan najis dianggap merusak kesucian yang diperoleh dari wudu.
            </p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>4. Tidur Berbaring, Pingsan, Mabuk, atau Gila</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Tidur dalam posisi berbaring, pingsan, mabuk, atau mengalami gangguan mental seperti gila, semuanya menyebabkan hilangnya kesadaran. Dalam kondisi ini, seseorang tidak dapat menjaga wudu, sehingga wudu yang sebelumnya
              dilakukan menjadi tidak sah dan harus diulangi.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>5. Bersentuhan Kulit Antara Laki-Laki dan Perempuan yang Bukan Mahram</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginBottom: "100px" }}>
              Kontak fisik langsung antara pria dan wanita yang tidak memiliki hubungan mahram (hubungan keluarga yang sangat dekat yang membuat mereka tidak boleh menikah) membatalkan wudu. Menurut pendapat mayoritas ulama, sentuhan ini
              dapat menyebabkan hilangnya kesucian wudu yang telah dilakukan.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default PembatalWudhu;
