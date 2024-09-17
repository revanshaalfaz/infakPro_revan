import React, { useEffect, useState } from "react";
import { messaging } from "./Database/Fire";
import { getToken } from "firebase/messaging";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import ScreenTransition from "./components/ScreenTransition";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import BerandaLaporanKeuangan from "../src/pages/LaporanKeuangan/BerandaLaporanKeuangan";
import Profile from "./pages/Profile";
import Notifcations from "./pages/Notifcations";
import PrayPage from "./pages/PrayPage";
import SplashScreen from "./pages/SplashScreen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { auth, database } from "./Database/Fire";
import { onAuthStateChanged } from "firebase/auth";
import Register from "./pages/Auth/Register";
import { onValue, ref } from "firebase/database";
import AdminPage from "./pages/Admin/AdminPage";
import KelolaKeuangan from "./pages/KelolaKeuangan";
import FormPemasukan from "./pages/FormPemasukan";
import FormPengeluaran from "./pages/FormPengeluaran";
import BerandaPanduanMengajar from "./pages/PanduanMengajarTPA/BerandaPanduanMengajar";
import BerandaHafalanSuratPendek from "./pages/PanduanMengajarTPA/HafalanSuratPendek/BerandaHafalanSuratPendek";
import BerandaKisahNabi from "./pages/PanduanMengajarTPA/KisahNabi/BerandaKisahNabi";
import BerandaTajwidMakhraj from "./pages/PanduanMengajarTPA/TajwidMakhraj/BerandaTajwidMakhraj";
import MakharijilHuruf from "./pages/PanduanMengajarTPA/TajwidMakhraj/MakharijilHuruf";
import NunSukunTanwin from "./pages/PanduanMengajarTPA/TajwidMakhraj/NunSukunTanwin";
import MimSukunTanwin from "./pages/PanduanMengajarTPA/TajwidMakhraj/MimSukunTanwin";
import AlifLam from "./pages/PanduanMengajarTPA/TajwidMakhraj/AlifLam";
import MadPanjang from "./pages/PanduanMengajarTPA/TajwidMakhraj/MadPanjang";
import Qalqalah from "./pages/PanduanMengajarTPA/TajwidMakhraj/Qalqalah";
import AnNas from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AnNas";
import AlFalaq from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlFalaq";
import AlIkhlas from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlIkhlas";
import AlLahab from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlLahab";
import AnNasr from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AnNasr";
import AlKafirun from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlKafirun";
import AlKautsar from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlKautsar";
import AlMaun from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlMaun";
import AlQuraisy from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlQuraisy";
import AlFil from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlFil";
import AlHumazah from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlHumazah";
import AlAsr from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlAsr";
import AtTakasur from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AtTakasur";
import BerandaDoa from "./pages/PanduanMengajarTPA/DoaSehariHari/BerandaDoa";
import DoaSebelumTidur from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSebelumTidur";
import DoaSesudahTidur from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSesudahTidur";
import DoaSebelumMakan from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSebelumMakan";
import DoaSesudahMakan from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSesudahMakan";
import DoaMasukWC from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMasukWC";
import DoaKeluarWC from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaKeluarWC";
import DoaMelepasPakaian from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMelepasPakaian";
import DoaMemakaiPakaian from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMemakaiPakaian";
import DoaBercermin from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaBercermin";
import DoaKeluarRumah from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaKeluarRumah";
import DoaMasukRumah from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMasukRumah";
import DoaSebelumWudhu from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSebelumWudhu";
import DoaSetelahWudhu from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSetelahWudhu";
import DoaMasukMasjid from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMasukMasjid";
import DoaKeluarMasjid from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaKeluarMasjid";
import TabelPemasukan from "./pages/LaporanKeuangan/TabelPemasukan";
import TabelPengeluaran from "./pages/LaporanKeuangan/TabelPengeluaran";
import TabelKeseluruhan from "./pages/LaporanKeuangan/TabelKeseluruhan";
import TabelKeuangan from "./pages/LaporanKeuangan/TabelKeuangan";
import GrafikPemasukan from "./pages/LaporanKeuangan/GrafikPemasukan";
import GrafikPengeluaran from "./pages/LaporanKeuangan/GrafikPengeluran";
import BerandaRukunImanIslam from "./pages/PanduanMengajarTPA/RukunImanIslam/BerandaRukunImanIslam";
import RukunIman from "./pages/PanduanMengajarTPA/RukunImanIslam/RukunIman";
import RukunIslam from "./pages/PanduanMengajarTPA/RukunImanIslam/RukunIslam";
import BerandaWudhuSholat from "./pages/PanduanMengajarTPA/WudhuSholat/BerandaWudhuSholat";
import TataCaraWudhu from "./pages/PanduanMengajarTPA/WudhuSholat/TataCaraWudhu";
import PembatalWudhu from "./pages/PanduanMengajarTPA/WudhuSholat/PembatalWudhu";
import SyaratSholat from "./pages/PanduanMengajarTPA/WudhuSholat/SyaratSholat";
import RukunSholat from "./pages/PanduanMengajarTPA/WudhuSholat/RukunSholat";
import TataCaraSholat from "./pages/PanduanMengajarTPA/WudhuSholat/TataCaraSholat";
import PembatalSholat from "./pages/PanduanMengajarTPA/WudhuSholat/PembatalSholat";
import BerandaTambahCatatan from "./pages/BerandaTambahCatatan";
import NabiAdam from "./pages/PanduanMengajarTPA/KisahNabi/NabiAdam";
import NabiIdris from "./pages/PanduanMengajarTPA/KisahNabi/NabiIdris";
import NabiNuh from "./pages/PanduanMengajarTPA/KisahNabi/NabiNuh";
import NabiHud from "./pages/PanduanMengajarTPA/KisahNabi/NabiHud";
import NabiSholeh from "./pages/PanduanMengajarTPA/KisahNabi/NabiSholeh";
import NabiIbrahim from "./pages/PanduanMengajarTPA/KisahNabi/NabiIbrahim";
import NabiLuth from "./pages/PanduanMengajarTPA/KisahNabi/NabiLuth";
import NabiIsmail from "./pages/PanduanMengajarTPA/KisahNabi/NabiIsmail";
import NabiIshak from "./pages/PanduanMengajarTPA/KisahNabi/NabiIshak";
import NabiYakub from "./pages/PanduanMengajarTPA/KisahNabi/NabiYakub";
import NabiYusuf from "./pages/PanduanMengajarTPA/KisahNabi/NabiYusuf";
import NabiAyub from "./pages/PanduanMengajarTPA/KisahNabi/NabiAyub";
import NabiSyuaib from "./pages/PanduanMengajarTPA/KisahNabi/NabiSyuaib";
import NabiMusa from "./pages/PanduanMengajarTPA/KisahNabi/NabiMusa";
import NabiHarun from "./pages/PanduanMengajarTPA/KisahNabi/NabiHarun";
import NabiZulkifli from "./pages/PanduanMengajarTPA/KisahNabi/NabiZulkifli";
import NabiDaud from "./pages/PanduanMengajarTPA/KisahNabi/NabiDaud";
import NabiSulaiman from "./pages/PanduanMengajarTPA/KisahNabi/NabiSulaiman";
import NabiIlyas from "./pages/PanduanMengajarTPA/KisahNabi/NabiIlyas";
import NabiIlyasa from "./pages/PanduanMengajarTPA/KisahNabi/NabiIlyasa";
import NabiYunus from "./pages/PanduanMengajarTPA/KisahNabi/NabiYunus";
import NabiZakaria from "./pages/PanduanMengajarTPA/KisahNabi/NabiZakaria";
import NabiYahya from "./pages/PanduanMengajarTPA/KisahNabi/NabiYahya";
import NabiIsa from "./pages/PanduanMengajarTPA/KisahNabi/NabiIsa";
import NabiMuhammad from "./pages/PanduanMengajarTPA/KisahNabi/NabiMuhammad";
import AdminKeuangan from "./pages/Admin/AdminKeuangan";
import AdminPengguna from "./pages/Admin/AdminPengguna";
import AdminEditPemasukan from "./pages/Admin/AdminEditPemasukan";
import AdminEditPengeluaran from "./pages/Admin/AdminEditPengeluaran";
import AdminEditPengguna from "./pages/Admin/AdminEditPengguna";
import secret from "./pages/secret";
import axios from "axios";
import Secret from "./pages/secret";

const App = () => {
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);
  const [timings, setTimings] = useState({});
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BEKVDbz-vGytWc5ugViwMoYR2EHv0to8Rr54cmDVGv0BkBy3qCp6THTPsXZJvob2ciZOBISh-7cM1oSORs31FX0",
      });
      console.log("Token Gen", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }
  const [loginTime, setLoginTime] = useState(null);
  const uid = localStorage.getItem("uid");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const starCountRef = ref(database, `users/`);
  const databaseUser = ref(database, `users/${uid}/`);
  const databaseKeuanganPemasukan = ref(database, `databaseKeuangan/pemasukan/`);
  const databaseKeuanganPengeluaran = ref(database, `databaseKeuangan/pengeluaran/`);
  const [data, setData] = useState([]);
  const [dataKeuanganPemasukan, setDataKeuanganPemasukan] = useState([]);
  const [dataKeuanganPengeluaran, setDataKeuanganPengeluaran] = useState([]);
  // console.log(data.role)
  const [dataUser, setDataUser] = useState();
  // console.log(dataUser?.role)
  useEffect(() => {
    // Membaca status autentikasi pengguna
    const unsubscribeAuth = onAuthStateChanged(auth, async (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser.email);
        setLoginTime(Date.now());
        setLoading(false); // Hentikan loading setelah autentikasi selesai
      } else {
        setUser(null);
        setLoading(false); // Hentikan loading jika tidak ada autentikasi
      }
    });

    // Unsubscribe dari listeners saat komponen dibongkar
    return () => {
      unsubscribeAuth();
    };
  }, []);
  useEffect(() => {
    // Membaca data dari Firebase saat komponen pertama kali dimuat
    const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setData(data);
        }
      });
      onValue(databaseKeuanganPemasukan, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setDataKeuanganPemasukan(data);
        }
      });
      onValue(databaseKeuanganPengeluaran, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setDataKeuanganPengeluaran(data);
        }
      });
      onValue(databaseUser, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setDataUser(data);
        }
      });
    };

    fetchData();
    handleOfflineStatus();
    window.addEventListener("online", handleOfflineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    // Membersihkan listener ketika komponen tidak lagi digunakan
    return () => {
      const starCountListener = onValue(starCountRef, () => {});
      const databaseUserListener = onValue(databaseUser, () => {});
      const databaseKeuanganPemasukanListener = onValue(databaseKeuanganPemasukan, () => {});
      const databaseKeuanganPengeluaranListener = onValue(databaseKeuanganPengeluaran, () => {});
      starCountListener();
      databaseUserListener();
      databaseKeuanganPemasukanListener();
      databaseKeuanganPengeluaranListener();
      window.removeEventListener("online", handleOfflineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, [starCountRef, databaseUser, databaseKeuanganPemasukan, databaseKeuanganPengeluaran]);
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const date = currentDate.getDate();
      const formattedMonth = month < 10 ? "0" + month : month;
      const formattedDate = date < 10 ? "0" + date : date;
      const formattedDateString = `${formattedDate}-${formattedMonth}-${year}`;

      try {
        const response = await fetch(`https://api.aladhan.com/v1/timings/${formattedDateString}?latitude=-7.81744&longitude=110.37876&method=15`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();

        // const timings = json.data.timings;
        // ambil hanya 5 waktu sholat
        const timings = {
          Fajr: json.data.timings.Fajr,
          Dhuhr: json.data.timings.Dhuhr,
          Asr: json.data.timings.Asr,
          Maghrib: json.data.timings.Maghrib,
          Isha: json.data.timings.Isha,
        };
        console.log("Prayer times:", timings);
        setTimings(timings);
        scheduleNotifications(timings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimes();
  }, []);

  const scheduleNotifications = (timings) => {
    const times = Object.keys(timings);
    times.forEach((time) => {
      const prayerTime = timings[time];
      const [hours, minutes] = prayerTime.split(":").map(Number);
      const now = new Date();
      const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
      const notifyTime = new Date(targetTime.getTime() - 157 * 60 * 1000); // 10 menit sebelum waktu sholat
      console.log("Waktu: ", time, notifyTime);

      const delay = notifyTime.getTime() - now.getTime();
      if (delay > 0) {
        setTimeout(() => {
          sendNotification(`Waktu sholat ${time} tinggal 10 menit lagi`, `Saatnya kumandangkan adzan ${time}`);
        }, delay);
      }
    });
  };

  const sendNotification = async (body, title) => {
    const token = "cPhpW07P9ciypF5_lIohAi:APA91bEhpxh8So2HzB8_K1dqyaZdn-awsNNDzhLdooByXXdDgi3X6MgSkvenw5QTp6Vh81zqg0VoOj53j0CkolStPXwcVw8MJJXN9m2LaoJmPVnlYFM-7sdA830JZ3I3uMWb0mhsX1n8";

    try {
      const url = `https://ikhlasapp.my.id/send-notification?token=${token}&title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
      console.log("Sending notification with URL: ", url);

      const response = await axios.get(url);
      console.log("Full response:", response);
      console.log("Notification sent:", response.data);
    } catch (error) {
      console.error("Error sending notification:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/landing-page"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <LandingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Private isAuthenticated={user} userRole={dataUser?.role}>
              <Login />
            </Private>
          }
        />
        <Route
          path="/register"
          element={
            <Private isAuthenticated={user} userRole={dataUser?.role}>
              <Register />
            </Private>
          }
        />
        <Route
          path="/maps"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Maps />
            </PrivateRoute>
          }
        />
        <Route
          path="/secret"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Secret />
            </PrivateRoute>
          }
        />
        <Route
          path="/laporanKeuangan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaLaporanKeuangan data={data} />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Profile dataUser={dataUser} />
            </PrivateRoute>
          }
        />
        <Route
          path="/notification"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Notifcations />
            </PrivateRoute>
          }
        />
        <Route
          path="/pray"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <PrayPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/keuangan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <KelolaKeuangan dataKeuanganPemasukan={dataKeuanganPemasukan} dataKeuanganPengeluaran={dataKeuanganPengeluaran} />
            </PrivateRoute>
          }
        />
        <Route
          path="/pemasukan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <FormPemasukan dataUser={dataUser} />
            </PrivateRoute>
          }
        />
        <Route
          path="/pengeluaran"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <FormPengeluaran dataUser={dataUser} />
            </PrivateRoute>
          }
        />
        <Route
          path="/TabelPemasukan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TabelPemasukan />
            </PrivateRoute>
          }
        />
        <Route
          path="/TabelPengeluaran"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TabelPengeluaran />
            </PrivateRoute>
          }
        />
        <Route
          path="/TabelKeseluruhan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TabelKeseluruhan />
            </PrivateRoute>
          }
        />
        <Route
          path="/TabelKeuangan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TabelKeuangan />
            </PrivateRoute>
          }
        />
        <Route
          path="/GrafikPemasukan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <GrafikPemasukan />
            </PrivateRoute>
          }
        />
        <Route
          path="/GrafikPengeluaran"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <GrafikPengeluaran />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaPanduanMengajar"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaPanduanMengajar />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaHafalanSuratPendek"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaHafalanSuratPendek />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaKisahNabi"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaKisahNabi />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaTajwidMakhraj"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaTajwidMakhraj />
            </PrivateRoute>
          }
        />
        <Route
          path="/MakharijilHuruf"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <MakharijilHuruf />
            </PrivateRoute>
          }
        />
        <Route
          path="/NunSukunTanwin"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NunSukunTanwin />
            </PrivateRoute>
          }
        />
        <Route
          path="/MimSukunTanwin"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <MimSukunTanwin />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlifLam"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlifLam />
            </PrivateRoute>
          }
        />
        <Route
          path="/MadPanjang"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <MadPanjang />
            </PrivateRoute>
          }
        />
        <Route
          path="/Qalqalah"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Qalqalah />
            </PrivateRoute>
          }
        />
        <Route
          path="/AnNas"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AnNas />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlFalaq"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlFalaq />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlIkhlas"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlIkhlas />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlLahab"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlLahab />
            </PrivateRoute>
          }
        />
        <Route
          path="/AnNasr"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AnNasr />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlKafirun"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlKafirun />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlKautsar"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlKautsar />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlMaun"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlMaun />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlQuraisy"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlQuraisy />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlFil"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlFil />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlHumazah"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlHumazah />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlAsr"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlAsr />
            </PrivateRoute>
          }
        />
        <Route
          path="/AtTakasur"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AtTakasur />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaDoa"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaDoa />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSebelumTidur"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSebelumTidur />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSesudahTidur"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSesudahTidur />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSebelumMakan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSebelumMakan />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSesudahMakan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSesudahMakan />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMasukWC"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMasukWC />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaKeluarWC"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaKeluarWC />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMelepasPakaian"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMelepasPakaian />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMemakaiPakaian"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMemakaiPakaian />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaBercermin"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaBercermin />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaKeluarRUmah"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaKeluarRumah />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMasukRumah"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMasukRumah />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSebelumWudhu"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSebelumWudhu />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSetelahWudhu"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSetelahWudhu />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMasukMasjid"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMasukMasjid />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaKeluarMasjid"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaKeluarMasjid />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaRukunImanIslam"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaRukunImanIslam />
            </PrivateRoute>
          }
        />
        <Route
          path="/RukunIman"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <RukunIman />
            </PrivateRoute>
          }
        />
        <Route
          path="/RukunIslam"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <RukunIslam />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaWudhuSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaWudhuSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/TataCaraWudhu"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TataCaraWudhu />
            </PrivateRoute>
          }
        />
        <Route
          path="/PembatalWudhu"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <PembatalWudhu />
            </PrivateRoute>
          }
        />
        <Route
          path="/SyaratSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <SyaratSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/RukunSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <RukunSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/TataCaraSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TataCaraSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/PembatalSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <PembatalSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaTambahCatatan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaTambahCatatan />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiAdam"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiAdam />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiIdris"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiIdris />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiNuh"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiNuh />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiHud"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiHud />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiSholeh"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiSholeh />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiIbrahim"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiIbrahim />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiLuth"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiLuth />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiIsmail"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiIsmail />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiIshak"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiIshak />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiYakub"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiYakub />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiYusuf"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiYusuf />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiAyub"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiAyub />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiSyuaib"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiSyuaib />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiMusa"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiMusa />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiHarun"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiHarun />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiZulkifli"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiZulkifli />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiDaud"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiDaud />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiSulaiman"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiSulaiman />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiIlyas"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiIlyas />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiIlyasa"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiIlyasa />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiYunus"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiYunus />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiZakaria"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiZakaria />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiYahya"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiYahya />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiIsa"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiIsa />
            </PrivateRoute>
          }
        />
        <Route
          path="/NabiMuhammad"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NabiMuhammad />
            </PrivateRoute>
          }
        />
        <Route
          path="/AdminKeuangan"
          element={
            <PrivateRouteAdmin isAuthenticated={user} userRole={dataUser?.role}>
              <AdminKeuangan />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/AdminPengguna"
          element={
            <PrivateRouteAdmin isAuthenticated={user} userRole={dataUser?.role}>
              <AdminPengguna />
            </PrivateRouteAdmin>
          }
        />
        <Route path="/AdminEditPemasukan/:id" element={<AdminEditPemasukan />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRouteAdmin isAuthenticated={user} userRole={dataUser?.role}>
              <AdminPage />
            </PrivateRouteAdmin>
          }
        />
        <Route path="/AdminEditPengeluaran/:id" element={<AdminEditPengeluaran />} />
        <Route path="/AdminEditPengguna/:id" element={<AdminEditPengguna />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRouteAdmin isAuthenticated={user} userRole={dataUser?.role}>
              <AdminPage />
            </PrivateRouteAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
const PrivateRoute = ({ children, isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && userRole === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return children; // Akses untuk pengguna non-admin
};

const PrivateRouteAdmin = ({ children, isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && userRole !== "admin") {
    return <Navigate to="/" />;
  }

  return children; // Akses untuk admin
};

const Private = ({ children, isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return children; // Akses ke halaman login atau halaman umum
  }

  if (userRole === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  if (userRole === "user") {
    return <Navigate to="/" />;
  }

  return children;
};
