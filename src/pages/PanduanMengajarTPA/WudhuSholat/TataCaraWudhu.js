import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const TataCaraWudhu = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Tata</h1>
            <p className="text-[25px] font-bold mb-[15px]">Cara Wudhu</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/tatacarawudhu.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Tata Cara Wudhu</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : Kemenag(2020)</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Dilansir dari Buku "Ayo, Berwudhu dengan benar!" dari Kementerian Agama RI, berikut ini adalah tata cara berwudhu. Hendaknya tidak hanya diajari teori tetapi juga diajari praktek wudhu secara langsung. Setiap gerakan wudhu
              harus dilakukan secara berurutan (tertib) sesuai dengan ajaran Islam. Tidak boleh ada langkah yang terlewat atau dibalik urutannya, karena tertib merupakan salah satu syarat sahnya wudhu. Melalui wudhu yang dilakukan dengan
              benar, seorang Muslim mempersiapkan diri secara fisik dan spiritual untuk melaksanakan ibadah, seperti sholat, dengan kondisi suci.
            </p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Membaca Basmallah sambil membasuh telapak tangan</p>
            <img alt="" src="/images/tataCaraWudhu1.png" className="rounded-[20px] w-10px h-10px" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Membaca basmallah sambil membasuh telapak tangan adalah salah satu adab dalam berwudu yang dianjurkan untuk dilakukan. Dengan membaca "Bismillah" atau "Bismillahirrahmanirrahim," seseorang memulai wudu dengan mengingat dan
              memohon berkah serta pertolongan dari Allah. Membasuh telapak tangan sebelum melakukan wudu juga membantu memastikan kebersihan tangan yang akan digunakan untuk menyentuh bagian-bagian tubuh lainnya selama proses wudu.
              Kombinasi membaca basmallah dan membasuh telapak tangan menciptakan kesadaran spiritual dan kebersihan fisik, yang keduanya penting dalam menjaga kesucian dan kekhusyukan dalam ibadah.
            </p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Berkumur tiga kali untuk membersihkan mulut dilanjutkan dengan membersihkan lubang hidung (istinsyāq dan istins|ār)</p>
            <img alt="" src="/images/tataCaraWudhu2.png" className="rounded-[20px] w-10px h-10px" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Berkumur tiga kali untuk membersihkan mulut adalah bagian dari proses wudu yang bertujuan untuk memastikan kebersihan bagian dalam mulut dari sisa makanan atau kotoran. Setelah itu, dilanjutkan dengan membersihkan lubang
              hidung melalui istinsyāq dan istins|ār, yaitu menghirup air ke dalam hidung dan mengeluarkannya kembali. Proses ini membantu membersihkan rongga hidung dari debu, kotoran, atau lendir yang mungkin ada. Kedua langkah ini tidak
              hanya memastikan kebersihan fisik tetapi juga mempersiapkan diri untuk melaksanakan ibadah dengan keadaan yang suci dan bersih.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>3. Membasuh wajah/muka tiga kali Jangan lupa sambil berniat wudu!</p>
            <img alt="" src="/images/tataCaraWudhu3.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Membasuh wajah atau muka tiga kali adalah langkah penting dalam proses wudu yang bertujuan untuk membersihkan wajah dari debu, kotoran, dan keringat. Membasuh muka mencakup seluruh area wajah, dari dahi hingga dagu dan dari
              telinga ke telinga. Saat melakukan ini, jangan lupa untuk sambil berniat wudu, yaitu menetapkan dalam hati bahwa tindakan tersebut dilakukan untuk berwudu demi memenuhi kewajiban ibadah. Niat ini penting karena membedakan
              antara sekadar mencuci muka biasa dan melaksanakan wudu sebagai ibadah yang memiliki nilai spiritual.
            </p>
            <img alt="" src="/images/niatwudhu.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "18px", textAlign: "Justify", fontWeight: "bold", marginTop: "10px" }}>4. Membasuh kedua tangan sampai siku sebanyak tiga kali dengan mendahulukan tangan kanan</p>
            <img alt="" src="/images/tataCaraWudhu4.png " className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Membasuh kedua tangan sampai siku sebanyak tiga kali adalah salah satu rukun dalam wudu yang harus dilakukan secara menyeluruh dan cermat. Proses ini dimulai dengan mendahulukan tangan kanan, kemudian dilanjutkan dengan tangan
              kiri. Membasuh tangan sampai siku memastikan bahwa seluruh lengan, termasuk siku, menjadi bersih dari kotoran dan najis. Melakukan ini sebanyak tiga kali juga mengikuti sunnah Nabi Muhammad SAW, yang menekankan pentingnya
              kebersihan dan kesucian dalam beribadah. Tindakan ini juga mencerminkan ketelitian dan kesungguhan dalam mempersiapkan diri untuk beribadah kepada Allah.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>5. Mengusap sebagian/seluruh kepala/rambut, sebanyak tiga kali</p>
            <img alt="" src="/images/tataCaraWudhu5.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Mengusap sebagian atau seluruh kepala/rambut sebanyak tiga kali merupakan salah satu rukun wudu yang penting. Tindakan ini dilakukan dengan cara membasahi tangan dengan air, lalu mengusapkannya pada kepala atau rambut, mulai
              dari dahi hingga belakang kepala dan kembali ke depan. Mengusap kepala melambangkan penyucian bagian tubuh yang sering terkena debu dan kotoran. Menurut sebagian ulama, mengusap sebagian kepala sudah mencukupi, namun mengusap
              seluruh kepala adalah lebih utama karena lebih menyeluruh dan sesuai dengan sunnah Nabi Muhammad SAW. Melakukan ini tiga kali memastikan bahwa kepala atau rambut benar-benar bersih dan siap untuk melaksanakan ibadah.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>6. Mengusap kedua telinga sebanyak tiga kali</p>
            <img alt="" src="/images/tataCaraWudhu6.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Mengusap kedua telinga sebanyak tiga kali adalah bagian dari wudu yang dilakukan setelah mengusap kepala. Tindakan ini dilakukan dengan menggunakan jari telunjuk untuk membersihkan bagian dalam telinga dan ibu jari untuk
              bagian luar telinga, memastikan bahwa seluruh area telinga terkena air. Mengusap telinga bertujuan untuk membersihkan kotoran atau debu yang mungkin ada, sekaligus melengkapi proses penyucian diri dalam wudu. Melakukannya
              sebanyak tiga kali mengikuti sunnah Nabi Muhammad SAW dan memastikan kebersihan yang menyeluruh, menjadikan wudu lebih sempurna dan mempersiapkan diri untuk melaksanakan ibadah dengan kondisi yang suci.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Justify", fontWeight: "bold", marginTop: "10px" }}>7. Membasuh kedua kaki hingga mata kaki sebanyak tiga kali, dimulai dari kaki kanan terlebih dahulu</p>
            <img alt="" src="/images/tataCaraWudhu7.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>
              Membasuh kedua kaki hingga mata kaki sebanyak tiga kali adalah langkah terakhir dalam wudu yang penting untuk memastikan kebersihan dan kesucian. Proses ini dimulai dengan membasuh kaki kanan terlebih dahulu, diikuti oleh kaki
              kiri. Membasuh kaki mencakup seluruh bagian kaki hingga mata kaki, memastikan bahwa tidak ada kotoran atau najis yang tersisa. Melakukan ini sebanyak tiga kali mengikuti sunnah Nabi Muhammad SAW, yang menekankan pentingnya
              kebersihan dalam setiap bagian tubuh yang digunakan dalam ibadah. Tindakan ini memastikan bahwa kaki, yang sering kali terkena debu dan kotoran, menjadi bersih dan suci, siap untuk melaksanakan shalat dan ibadah lainnya.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default TataCaraWudhu;
