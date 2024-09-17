import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiMuhammad = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Muhammad</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabimuhammad.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Muhammad SAW</h1>
            <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "bold" }}>1. Kelahiran Sampai Umur 40 Tahun (sebelum menjadi Nabi dan Rosul)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Muhammad shalallahu ‘alaihi wassallam dilahirkan pada tahun gajah, tahun ketika Abrahah dengan pasukan bergajahnya gagal menyerang Ka’bah. Nabi shalallahu ‘alaihi wassallam lahir pada hari Senin berdasarkan sabdanya
              tatkala ditanya tentang puasa hari Senin, “Itulah hari yang aku dilahirkan padanya, hari aku dibangkitkan (diangkat menjadi rasul), dan dan diturunkan (wahyu) kepadaku padanya" (HR. Muslim no. 1162). Adapun bulan dan tanggal
              kelahirannya terjadi perbedaan pendapat. Ada yang berpendapat pada tanggal 12 dari bulan Rabi'ul Awal dan sebagian ulama’ berpendapat pada tanggal 9 dari bulan yang sama (9 Rabi’ul Awwal /20 atau 22 April 571 M). Bapak beliau
              bernama ‘Abdullah bin Abdil Muthallib bin Hasyim dari suku Quraisy, sedang ibu beliau shalallahu ‘alaihi wassallam bernama Aminah. Bapak beliau shalallahu ‘alaihi wassallam meninggal di Yatsrib (Madinah) saat beliau masih
              dalam kandungan. Berikut ini ringkasan peristiwa penting sampai menjelang usia 40 tahun.{" "}
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Diasuh Halimah (sampai umur 4 atau 5 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Diasuh kembali oleh Ibunya (sampai umur 6 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Diasuh kakeknya (sampai umur 8 tahun) kemudian pamannya </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Diajak ke Syam (umur 12 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Perang Fijar dan Perjanjian Fudhul (umur 15 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Menikah dengan Khadijah (umur 25 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Peristiwa perbaikan Ka’bah (umur 35 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Uzlah di gua Hira’ dan turun wahyu (umur 40 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Menjelang umur 40 tahun Muhammad sering ber-uzlah (menyendiri) ke gua Hira’ yang terletak di gunung Nur, sekitar 2 mil dari Mekah. Hal ini beliau lakukan hampir sekitar 3 tahun. Beliau beruzlah memikirkan keadaan kaumnya yang
              diliputi kejahiliyahan (kebodohan) dan kesyirikan. Menjelang nubuwah beliau mimpi melihat ufuk yang sangat terang dan hal ini terjadi selama hampir 6 bulan berturut-turut. Kemudian datanglah malaikat Jibril mewahyukan kepada
              beliau surat yang pertama kali turun dari Al Qur’an yaitu surat al Alaq (“Bacalah dengan (menyebut) nama Tuhanmu Yang menciptakan”... dst). Berdasar penelitian, turunnya wahyu ini terjadi pada hari Senin setelah berlalu 21
              hari di bulan Ramadhan (di malam hari). Bertepatan 10 Agustus 610M. Setelah turun wahyu yang pertama, Nabi Muhammad shalallahu ‘alaihi wassallam ketakutan kemudian pulang ke rumahnya dan meminta Khadijah untuk menyelimutinya
              hingga hilang rasa takutnya. Mereka menceritakan apa yang telah terjadi pada Waraqah bin Naufal, seorang pendeta Nashrani, dia mengatakan bahwa itu adalah Namush (Jibril) yang dulu datang memberi wahyu pada Musa ‘alaihissalam.
              Setelah berselang beberapa hari kemudian turun wahyu kedua. Saat itu Rasulullah shalallahu ‘alaihi wassallam sedang berjalan, kemudian terdengar suara dari langit. Saat beliau shalallahu ‘alaihi wassallam mengangkat kepala
              ternyata ada malaikat yang dia lihat di gua hira’ sebelumnya (yaitu Jibril). Beliau pun kembali pulang kemudian meminta untuk diselimuti oleh keluarganya. Setelah itu turunlah surat al Mudatsir (“Hai orang yang berkemul
              (berselimut), bangunlah, lalu berilah peringatan!” ..dst). Dengan demikian telah jelas bagi beliau bahwa beliau shalallahu ‘alaihi wassallam mengemban amanah yang baru yang begitu agung, yaitu amanah kenabian dan kerasulan.
              Beliau shalallahu ‘alaihi wassallam diperintahkan untuk menyampaikan risalah dari Tuhan semesta alam untuk manusia seluruhnya.
            </p>
            <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "bold" }}>1. Kelahiran Sampai Umur 40 Tahun (sebelum menjadi Nabi dan Rosul)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Muhammad shalallahu ‘alaihi wassallam dilahirkan pada tahun gajah, tahun ketika Abrahah dengan pasukan bergajahnya gagal menyerang Ka’bah. Nabi shalallahu ‘alaihi wassallam lahir pada hari Senin berdasarkan sabdanya
              tatkala ditanya tentang puasa hari Senin, “Itulah hari yang aku dilahirkan padanya, hari aku dibangkitkan (diangkat menjadi rasul), dan dan diturunkan (wahyu) kepadaku padanya" (HR. Muslim no. 1162). Adapun bulan dan tanggal
              kelahirannya terjadi perbedaan pendapat. Ada yang berpendapat pada tanggal 12 dari bulan Rabi'ul Awal dan sebagian ulama’ berpendapat pada tanggal 9 dari bulan yang sama (9 Rabi’ul Awwal /20 atau 22 April 571 M). Bapak beliau
              bernama ‘Abdullah bin Abdil Muthallib bin Hasyim dari suku Quraisy, sedang ibu beliau shalallahu ‘alaihi wassallam bernama Aminah. Bapak beliau shalallahu ‘alaihi wassallam meninggal di Yatsrib (Madinah) saat beliau masih
              dalam kandungan. Berikut ini ringkasan peristiwa penting sampai menjelang usia 40 tahun.{" "}
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Diasuh Halimah (sampai umur 4 atau 5 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Diasuh kembali oleh Ibunya (sampai umur 6 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Diasuh kakeknya (sampai umur 8 tahun) kemudian pamannya </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Diajak ke Syam (umur 12 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>- Perang Fijar dan Perjanjian Fudhul (umur 15 tahun)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px", marginBottom: "100px" }}></p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiMuhammad;
