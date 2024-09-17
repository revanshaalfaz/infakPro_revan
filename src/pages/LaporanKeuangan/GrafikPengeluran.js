import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref as firebaseRef, onValue as firebaseOnValue } from "firebase/database";
import { Line } from "react-chartjs-2";
import AuthenticatedUser from "../../Layouts/Authenticated";
import { Chart, registerables } from "chart.js";
import { database } from "../../Database/Fire";

Chart.register(...registerables);

const GrafikKeuangan = () => {
  const navigate = useNavigate();
  const [pemasukanData, setPemasukanData] = useState([]);
  const [pengeluaranData, setPengeluaranData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [displayedYear, setDisplayedYear] = useState(new Date().getFullYear().toString());
  const [availableYears, setAvailableYears] = useState([]);
  const [chartType, setChartType] = useState("all");

  useEffect(() => {
    const pemasukanRef = firebaseRef(database, "databaseKeuangan/pemasukan");
    firebaseOnValue(pemasukanRef, (snapshot) => {
      const pemasukanList = [];
      const pemasukanObj = snapshot.val();
      const yearsSet = new Set();

      for (let uid in pemasukanObj) {
        const pemasukan = { uid, ...pemasukanObj[uid] };
        const date = new Date(pemasukan.tanggalPemasukan);
        if (date.getFullYear().toString() === displayedYear) {
          pemasukanList.push(pemasukan);
        }
        yearsSet.add(date.getFullYear().toString());
      }

      console.log("Pemasukan List:", pemasukanList); // Debugging output

      setAvailableYears((prevYears) => {
        const updatedYears = new Set([...prevYears, ...yearsSet]);
        return Array.from(updatedYears).sort((a, b) => a - b);
      });

      setPemasukanData(pemasukanList);
    });
  }, [displayedYear]);

  useEffect(() => {
    const pengeluaranRef = firebaseRef(database, "databaseKeuangan/pengeluaran");
    firebaseOnValue(pengeluaranRef, (snapshot) => {
      const pengeluaranList = [];
      const pengeluaranObj = snapshot.val();
      const yearsSet = new Set();

      for (let uid in pengeluaranObj) {
        const pengeluaran = { uid, ...pengeluaranObj[uid] };
        const date = new Date(pengeluaran.tanggalPengeluaran);
        if (date.getFullYear().toString() === displayedYear) {
          pengeluaranList.push(pengeluaran);
        }
        yearsSet.add(date.getFullYear().toString());
      }

      console.log("Pengeluaran List:", pengeluaranList); // Debugging output

      setAvailableYears((prevYears) => {
        const updatedYears = new Set([...prevYears, ...yearsSet]);
        return Array.from(updatedYears).sort((a, b) => a - b);
      });

      setPengeluaranData(pengeluaranList);
    });
  }, [displayedYear]);

  const processDataForChart = (data, dateKey) => {
    const monthlyData = Array(12).fill(0);
    data.forEach((item) => {
      const date = new Date(item[dateKey]);
      const monthIndex = date.getMonth();
      if (!isNaN(monthIndex)) {
        monthlyData[monthIndex] += parseFloat(item.nominalPemasukan || item.nominalPengeluaran);
      }
    });
    console.log("Processed Monthly Data:", monthlyData); // Debugging output
    return monthlyData;
  };

  const pemasukanChartData = processDataForChart(pemasukanData, "tanggalPemasukan");
  const pengeluaranChartData = processDataForChart(pengeluaranData, "tanggalPengeluaran");

  const pemasukanDataForChart = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    datasets: [
      {
        label: "Pemasukan Bulanan",
        data: pemasukanChartData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const pengeluaranDataForChart = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    datasets: [
      {
        label: "Pengeluaran Bulanan",
        data: pengeluaranChartData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const combinedDataForChart = {
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
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 80,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Grafik Keuangan Bulanan - Tahun ${displayedYear}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500000,
          maxTicksLimit: 20,
        },
      },
    },
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setDisplayedYear(e.target.value);
  };

  return (
    <AuthenticatedUser>
      <div className="min-h-screen w-full bg-white justify-center">
        <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-white text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <h1 className="text-white text-[25px] mt-[5px] mb-[10px] font-bold text-center">Grafik Keuangan</h1>
        </div>
        <div className="px-[24px] mt-[30px]">
          <h1 style={{ fontSize: "23px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "15px" }}>Grafik Laporan Keuangan Masjid Al-Ikhlas Sorosutan</h1>
          <div className="flex justify-center items-center mb-4 text-black">
            <div className="mr-4">
              <label className="mr-2">Pilih Tahun:</label>
              <select value={selectedYear} onChange={handleYearChange} className="px-3 py-1 border rounded-md text-black">
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center mb-4 text-black">
            <div className="mr-4">
              <input type="radio" value="all" checked={chartType === "all"} onChange={(e) => setChartType(e.target.value)} /> Semua
            </div>
            <div className="mr-4">
              <input type="radio" value="pemasukan" checked={chartType === "pemasukan"} onChange={(e) => setChartType(e.target.value)} /> Pemasukan
            </div>
            <div className="mr-4">
              <input type="radio" value="pengeluaran" checked={chartType === "pengeluaran"} onChange={(e) => setChartType(e.target.value)} /> Pengeluaran
            </div>
          </div>
          {chartType === "all" && (
            <div className="mb-2 flex justify-center" style={{ height: "75vh", width: "100%" }}>
              <Line data={combinedDataForChart} options={options} />
            </div>
          )}
          {chartType === "pemasukan" && (
            <div className="mb-2 flex justify-center" style={{ height: "75vh", width: "100%" }}>
              <Line data={pemasukanDataForChart} options={options} />
            </div>
          )}
          {chartType === "pengeluaran" && (
            <div className="mb-2 flex justify-center" style={{ height: "75vh", width: "100%" }}>
              <Line data={pengeluaranDataForChart} options={options} />
            </div>
          )}
        </div>
        <style>{`
          @media (max-width: 768px) { 
            .chart-container {
              height: 75vh;
            }
          }
        `}</style>
      </div>
    </AuthenticatedUser>
  );
};

export default GrafikKeuangan;
