import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NabiHud = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Hud</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nabihud.jpeg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Kisah Nabi Hud AS</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : gramedia.com</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium" }}>
              Nabi Hud diutus Allah bagi kaum ‘Ad, kaum pertama penyembah patung setelah azab banjir besar pada zaman Nabi Nuh. Kaum ‘Ad sama seperti kaum sebelumnya senang melakukan kemaksiatan dan menghamburkan harta dengan sia-sia serta
              membenci dan mencemooh Nabi Hud. Saat berdakwah, Nabi Hud justru menerima banyak rasa iri dan dengki dari kaum ‘Ad.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Nabi Hud tetap terus berdakwah, peringatan pertama yang dikirimkan Allah kepada kaum ‘Ad terjadinya musim paceklik panjang. Semuanya mati dan tandus, tidak ada mata air. Berkat Doa Nabi Hud, Allah mengabulkan doanya untuk
              menurunkan hujan agar tanaman dan sumber air dapat menyala kembali, kehidupan pun kembali normal.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "5px" }}>
              Sayangnya, kaum ‘Ad tetap saja melakukan kemaksiatan sehingga Allah pun azab besar dengan mengirimkan awan hitam pekat, awan ini bergerak dan bergulung-gulung berada tepat diatas kaum ‘Ad . Dengan angin badai itulan, Allah
              kemudian menurunkan badai dengan awan yang penuh petir yang membinasakan kaum ‘Ad yang dzalim. Sementara itu, Nabi Hud dan pengikutnya selamat dan berhijrah ke Kota Hadramaut. Mukjizat Nabi Hud antara lain:
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px" }}>
              1. Mampu menurunkan hujan atas izin Allah, kala itu kaum ‘Ad dilanda kekeringan hingga tanaman mati dan tak ada sumber air.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontWeight: "medium", marginTop: "2px", marginLeft: "15px", marginBottom: "100px" }}>2. Selamat dari badai petir yang dahsyat.</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NabiHud;
