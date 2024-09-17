import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database, ref, onValue } from "../../Database/Fire";
import { ref as firebaseRef, onValue as firebaseOnValue } from "firebase/database";
import { Line } from "react-chartjs-2";
import AuthenticatedUser from "../../Layouts/Authenticated";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const GrafikPemasukan = () => {
  const navigate = useNavigate();
  const [pemasukanData, setPemasukanData] = useState([]);
  const [pengeluaranData, setPengeluaranData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [displayedYear, setDisplayedYear] = useState(new Date().getFullYear().toString());
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    const pemasukanRef = firebaseRef(database, "databaseKeuangan/pemasukan");
    firebaseOnValue(pemasukanRef, (snapshot) => {
      const pemasukanList = [];
      const pemasukanObj = snapshot.val();
      const yearsSet = new Set();

      for (let uid in pemasukanObj) {
        const pemasukan = { uid, ...pemasukanObj[uid] };
        pemasukanList.push(pemasukan);

        const date = new Date(pemasukan.tanggalPemasukan);
        yearsSet.add(date.getFullYear().toString());
      }

      setAvailableYears(Array.from(yearsSet).sort((a, b) => a - b));
      setPemasukanData(pemasukanList);
    });
  }, []);

  useEffect(() => {
    const pengeluaranRef = firebaseRef(database, "databaseKeuangan/pengeluaran");
    firebaseOnValue(pengeluaranRef, (snapshot) => {
      const pengeluaranList = [];
      const pengeluaranObj = snapshot.val();

      for (let uid in pengeluaranObj) {
        const pengeluaran = { uid, ...pengeluaranObj[uid] };
        const date = new Date(pengeluaran.tanggalPengeluaran);

        if (date.getFullYear().toString() === displayedYear) {
          pengeluaranList.push(pengeluaran);
        }
      }

      setPengeluaranData(pengeluaranList);
    });
  }, [displayedYear]);

  const processDataForChart = (data) => {
    const monthlyData = Array(12).fill(0);
    data.forEach((pemasukan) => {
      const date = new Date(pemasukan.tanggalPemasukan);
      const monthIndex = date.getMonth();
      monthlyData[monthIndex] += parseFloat(pemasukan.nominalPemasukan);
    });
    return monthlyData;
  };

  const processPengeluaranDataForChart = (data) => {
    const monthlyData = Array(12).fill(0);
    data.forEach((pengeluaran) => {
      const date = new Date(pengeluaran.tanggalPengeluaran);
      const monthIndex = date.getMonth();
      monthlyData[monthIndex] += parseFloat(pengeluaran.nominalPengeluaran);
    });
    return monthlyData;
  };

  const pemasukanChartData = processDataForChart(pemasukanData);
  const pengeluaranChartData = processPengeluaranDataForChart(pengeluaranData);

  const data = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    datasets: [
      {
        label: "Pemasukan Bulanan",
        data: pemasukanChartData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Pengeluaran Bulanan",
        data: pengeluaranChartData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Add this to make the chart responsive
    layout: {
      padding: {
        bottom: 80, // Add 80px margin at the bottom
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Grafik Pemasukan dan Pengeluaran Bulanan - Tahun ${displayedYear}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50000,
          maxTicksLimit: 20,
        },
      },
    },
  };

  const handleUpdateChart = () => {
    setDisplayedYear(selectedYear);
  };

  return (
    <AuthenticatedUser>
      <div className="min-h-screen w-full bg-white justify-center">
        <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-white text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <h1 className="text-white text-[25px] mt-[5px] mb-[10px] font-bold text-center">Grafik Pemasukan dan Pengeluaran</h1>
        </div>
        <div className="px-[24px] mt-[30px]">
          <h1 style={{ fontSize: "23px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "15px" }}>Grafik Laporan Keuangan Pemasukan dan Pengeluaran</h1>
          <div className="flex justify-center items-center mb-4 text-black">
            <div className="mr-4">
              <label className="mr-2">Pilih Tahun:</label>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="px-3 py-1 border rounded-md text-black">
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <button onClick={handleUpdateChart} className="px-4 py-2 bg-[#0C8F8F] text-white rounded-md">
              Tampilkan Grafik
            </button>
          </div>
          <div className="mb-2 flex justify-center" style={{ height: "75vh", width: "100%" }}>
            <Line data={data} options={options} />
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .chart-container {
              height: 75vh; /* 75% dari tinggi viewport pada perangkat mobile */
            }
          }
        `}</style>
      </div>
    </AuthenticatedUser>
  );
};

export default GrafikPemasukan;
