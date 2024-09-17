import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const PembatalSholat = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Sholat</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/batalsholat.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hal-Hal yang Membatalkan Sholat</h1>
            <h1 style={{ fontSize: "12px", fontWeight: "normal", fontStyle: "italic" }}>Sumber : beritaku.id</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Syaikh Salim Al-Hadromi menyebutkan, setidaknya ada 13 perkara yang membatalkan sholat jika kita lakukan. Apa sajakah 13 perkara itu? Di dalam kitabnya Safinatun Naja Syeikh Salim menjelaskan 13 perkara yang membatalkan sholat
              yaitu:
            </p>

            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Hadas Kecil dan Hadas Besar:</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Hadas kecil adalah kondisi tidak suci yang memerlukan wudhu, seperti buang angin atau buang air kecil. Hadas besar adalah kondisi yang memerlukan mandi wajib, seperti setelah hubungan suami istri atau haid. Kedua kondisi ini
              harus dihindari selama shalat karena dapat membatalkan shalat.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Tersentuh Najis</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Najis adalah kotoran yang dianggap tidak suci dalam Islam, seperti kotoran binatang atau darah. Jika seseorang tersentuh najis saat shalat, meskipun tidak sengaja, maka shalat tersebut batal.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>3. Aurat Terbuka</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Aurat adalah bagian tubuh yang harus ditutup menurut syariat Islam. Jika aurat terbuka saat shalat dan tidak segera ditutup, maka shalat tersebut batal.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>4. Berbicara</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Mengucapkan kata-kata selain bacaan shalat, baik sengaja maupun tidak sengaja, dapat membatalkan shalat. Berbicara mengganggu kekhusyukan dan konsentrasi dalam ibadah.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>5. Makan dan Minum dengan Sengaja</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Makan atau minum, meskipun sedikit, secara sengaja selama shalat akan membatalkan shalat. Hal ini mengganggu kekhusyukan dan konsentrasi.</p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>6. Bergerak secara terus menerus sedikitnya tiga gerakan meskipun secara tidak sadar (lupa).</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Bergerak secara terus menerus sedikitnya tiga gerakan meskipun secara tidak sadar (lupa) merupakan hal yang dapat membatalkan shalat. Gerakan yang dimaksud adalah gerakan besar yang bukan bagian dari gerakan shalat, seperti
              menggaruk-garuk, melangkah, atau gerakan lain yang tidak relevan dengan pelaksanaan shalat. Jika gerakan tersebut dilakukan secara terus menerus sebanyak tiga kali atau lebih, maka shalat dianggap batal. Ini karena gerakan
              yang tidak perlu dapat mengganggu kekhusyukan dan konsentrasi dalam shalat. Oleh karena itu, penting untuk berusaha menjaga ketenangan dan minimalisasi gerakan yang tidak diperlukan selama shalat untuk memastikan ibadah tetap
              sah dan diterima.
            </p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>7. Melompat atau berpindah tempat dengan grusah-grusuh.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Melompat atau berpindah tempat dengan grusah-grusuh adalah salah satu tindakan yang dapat membatalkan shalat. Grusah-grusuh mengacu pada gerakan yang kasar, terburu-buru, dan tidak teratur. Ketika seseorang melompat atau
              berpindah tempat dengan cara yang tidak tenang dan tidak tertib, hal ini dapat mengganggu kekhusyukan dan ketenangan dalam shalat. Gerakan seperti ini menunjukkan kurangnya perhatian dan penghormatan terhadap ibadah yang
              sedang dilakukan. Oleh karena itu, menjaga ketenangan dan gerakan yang teratur selama shalat sangat penting untuk mempertahankan kesahihan dan kekhusyukan shalat.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>8. Memukul sesuatu dengan serius (dhorbatul mufrithoh).</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Memukul sesuatu dengan serius (dhorbatul mufrithoh) merupakan tindakan yang dapat membatalkan shalat. Dhorbatul mufrithoh berarti melakukan pukulan atau gerakan yang kuat dan berlebihan terhadap sesuatu dengan keseriusan yang
              signifikan. Tindakan seperti ini tidak hanya mengganggu kekhusyukan shalat tetapi juga menunjukkan bahwa perhatian seseorang telah teralihkan dari ibadah yang sedang dilakukan. Pukulan atau gerakan kuat ini tidak sesuai dengan
              ketenangan dan konsentrasi yang diperlukan dalam shalat. Oleh karena itu, menjaga sikap tenang dan menghindari gerakan yang tidak perlu sangat penting agar shalat tetap sah dan penuh khusyuk.
            </p>
            <p style={{ textAlign: "Justify", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>9. Sholat seseorang juga akan batal jika Ia menambah rukun sholat yang bersifat perbuatan (Ruknin fi’liyyin) secara sengaja. </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Shalat seseorang akan batal jika ia menambah rukun shalat yang bersifat perbuatan (ruknin fi’liyyin) secara sengaja. Ruknin fi’liyyin adalah rukun-rukun shalat yang berupa gerakan fisik, seperti berdiri, rukuk, sujud, dan
              duduk di antara dua sujud. Menambah gerakan tersebut di luar ketentuan yang telah ditetapkan dalam tata cara shalat berarti mengubah struktur dan aturan shalat yang seharusnya. Jika penambahan ini dilakukan dengan sengaja,
              maka shalat tersebut menjadi tidak sah karena tidak mengikuti tata cara yang telah diajarkan oleh Nabi Muhammad SAW. Oleh karena itu, penting untuk mematuhi tata cara shalat yang benar dan menghindari penambahan gerakan yang
              tidak diperlukan agar shalat tetap sah dan diterima.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>10. Mendahului gerakan imam</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Mendahului gerakan Imam dalam sholat berjamaah dalam rukun yang bersifat perbuatan sebanyak 2 rukun berturut-turut, atau menyelisihi rukun imam sebanyak dua rukun tanpa udzur.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>11. Niat membatalkan sholat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Niat membatalkan sholat juga merupakan salah satu hal yang dapat menyebabkan sholat menjadi batal. Jika seseorang, baik secara sengaja maupun tidak sengaja, berniat dalam hatinya untuk menghentikan atau membatalkan sholat yang
              sedang dilakukan, maka sholat tersebut menjadi tidak sah. Niat adalah inti dari setiap ibadah, termasuk sholat, dan jika niat tersebut berubah atau terhenti, maka ibadah tersebut tidak lagi valid. Oleh karena itu, sangat
              penting untuk menjaga niat dan kekhusyukan sepanjang pelaksanaan sholat, serta menghindari gangguan pikiran yang bisa menyebabkan niat membatalkan sholat.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>12. Menggantungkan niat membatalkan sholat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Menggantungkan niat membatalkan sholat berarti seseorang ragu-ragu atau berniat dengan syarat untuk membatalkan sholatnya, seperti berpikir "Jika terjadi sesuatu, saya akan membatalkan sholat." Keraguan atau niat yang tidak
              pasti ini dapat menyebabkan sholat menjadi batal. Dalam sholat, diperlukan kesungguhan dan keyakinan penuh tanpa ada keraguan atau niat untuk menghentikannya. Menggantungkan niat membatalkan sholat menunjukkan kurangnya
              keteguhan hati dan bisa mengganggu kekhusyukan dan konsentrasi dalam ibadah. Oleh karena itu, penting untuk menjaga niat yang teguh dan yakin sepanjang pelaksanaan sholat agar ibadah tetap sah dan diterima.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>13. Ragu-ragu apakah sholat kita batal atau tidak.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginBottom: "100px" }}>
              Jika seseorang ragu-ragu apakah sholatnya batal atau tidak, maka sholat tersebut tidak perlu diulangi, asalkan tidak ada keyakinan kuat atau bukti jelas bahwa sholat tersebut benar-benar batal. Keraguan yang muncul setelah
              melakukan suatu ibadah, selama tidak disertai dengan alasan yang kuat, umumnya tidak dianggap sebagai pembatal. Dalam Islam, keraguan yang bersifat was-was atau sering kali muncul tanpa dasar yang jelas tidak seharusnya
              diikuti. Prinsipnya adalah mempertahankan keyakinan atas keabsahan ibadah yang telah dilakukan, kecuali terdapat bukti konkret yang menunjukkan sebaliknya. Namun, jika keraguan tersebut sering terjadi dan mengganggu ketenangan
              dalam beribadah, sebaiknya mencari bimbingan dari seorang ulama atau guru agama untuk mendapatkan solusi yang tepat.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default PembatalSholat;
