import React, { useState, useEffect } from "react";
import ClockComponent from "../components/ClockComponents";
import Button from "../components/Button";
import PraySchedule from "../components/PraySchedule";
import AuthenticatedUser from "../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";
import CatatanKeuangan from "../components/CatatanKeuangan";
import SaldoKotakInfak from "../components/SaldoKotakInfak";
import MonitoringKotakInfak from "../components/MonitoringKotakInfak";
import PanduanMengajarTPA from "../components/PanduanMengajarTPA";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const date = currentDate.getDate();
        const formattedDate = `${date < 10 ? "0" + date : date}-${month < 10 ? "0" + month : month}-${year}`;

        const response = await fetch(`https://api.aladhan.com/v1/timings/${formattedDate}?latitude=-7.797068&longitude=110.370529&method=15`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        setData(json);

        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        const timings = json.data.timings;

        const prayerTimes = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer) => {
          const [hour, minute] = timings[prayer].split(":").map(Number);
          return { prayer, hour, minute };
        });

        let foundNextPrayer = false;
        for (const { prayer, hour, minute } of prayerTimes) {
          if (hour > currentHour || (hour === currentHour && minute > currentMinute)) {
            setNextPrayer(prayer);
            foundNextPrayer = true;
            break;
          }
        }

        if (!foundNextPrayer) {
          setNextPrayer("Fajr"); // Set to the first prayer of the next day if no prayer time is left for today
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5]">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] text-white font-semibold mb-[5px] mt-[20px]">Waktu Sholat, {nextPrayer}</h1>
            <p className="text-[35px] text-white font-bold mb-[20px]">{data.data.timings[nextPrayer]} WIB</p>
          </div>
        </div>
        <div className="px-[15px] mt-[36px]">
          <SaldoKotakInfak />
        </div>
        <div className="flex px-[15px] mt-[36px]">
          <div className="flex-1 mr-[10px]">
            <MonitoringKotakInfak />
          </div>
          <div className="flex-1 ml-[10px]">
            <CatatanKeuangan />
          </div>
        </div>
        <div className="flex px-[15px] mt-[36px]">
          <div className="flex-1 mr-[10px]">
            <PraySchedule />
          </div>
          <div className="flex-1 ml-[10px]">
            <PanduanMengajarTPA />
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default Home;
