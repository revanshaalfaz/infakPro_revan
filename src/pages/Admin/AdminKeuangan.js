import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref as firebaseRef, onValue as firebaseOnValue, remove } from "firebase/database";
import AuthenticatedUser from "../../Layouts/Authenticated";
import AuthenticatedAdmin from "../../Layouts/AuthenticatedAdmin";
import Swal from "sweetalert2";

const AdminKeuangan = () => {
  const navigate = useNavigate();
  const [pengeluaranData, setPengeluaranData] = useState([]);
  const [pemasukanData, setPemasukanData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filter, setFilter] = useState("semua");
  const [totalSaldo, setTotalSaldo] = useState(0);
  const [totalPemasukan, setTotalPemasukan] = useState(0);
  const [totalPengeluaran, setTotalPengeluaran] = useState(0);

  useEffect(() => {
    const db = getDatabase();
    const pengeluaranRef = firebaseRef(db, "databaseKeuangan/pengeluaran");
    firebaseOnValue(pengeluaranRef, (snapshot) => {
      const pengeluaranList = [];
      const pengeluaranObj = snapshot.val();
      for (let uid in pengeluaranObj) {
        pengeluaranList.push({ uid, ...pengeluaranObj[uid] });
      }

      pengeluaranList.sort((a, b) => new Date(b.tanggalPengeluaran) - new Date(a.tanggalPengeluaran));

      const filteredPengeluaranList = pengeluaranList.filter((pengeluaran) => {
        if (!startDate || !endDate) return true;
        const pengeluaranDate = new Date(pengeluaran.tanggalPengeluaran);
        return pengeluaranDate >= new Date(startDate) && pengeluaranDate <= new Date(endDate);
      });

      setPengeluaranData(filteredPengeluaranList);
    });
  }, [startDate, endDate]);

  useEffect(() => {
    const db = getDatabase();
    const pemasukanRef = firebaseRef(db, "databaseKeuangan/pemasukan");
    firebaseOnValue(pemasukanRef, (snapshot) => {
      const pemasukanList = [];
      const pemasukanObj = snapshot.val();
      for (let uid in pemasukanObj) {
        pemasukanList.push({ uid, ...pemasukanObj[uid] });
      }

      pemasukanList.sort((a, b) => new Date(b.tanggalPemasukan) - new Date(a.tanggalPemasukan));

      const filteredPemasukanList = pemasukanList.filter((pemasukan) => {
        if (!startDate || !endDate) return true;
        const pemasukanDate = new Date(pemasukan.tanggalPemasukan);
        return pemasukanDate >= new Date(startDate) && pemasukanDate <= new Date(endDate);
      });

      setPemasukanData(filteredPemasukanList);
    });
  }, [startDate, endDate]);

  let combinedData = [];
  if (filter === "semua") {
    combinedData = [...pengeluaranData, ...pemasukanData];
    combinedData.sort((a, b) => new Date(b.tanggalPengeluaran || b.tanggalPemasukan) - new Date(a.tanggalPengeluaran || a.tanggalPemasukan));
  } else if (filter === "pemasukan") {
    combinedData = pemasukanData;
  } else if (filter === "pengeluaran") {
    combinedData = pengeluaranData;
  }

  if (sortBy === "kategori") {
    combinedData.sort((a, b) => {
      const kategoriA = (a.kategoriPengeluaran || a.kategoriPemasukan).toLowerCase();
      const kategoriB = (b.kategoriPengeluaran || b.kategoriPemasukan).toLowerCase();
      if (kategoriA < kategoriB) return -1;
      if (kategoriA > kategoriB) return 1;
      return 0;
    });
  } else if (sortBy === "nominalTerbesar") {
    combinedData.sort((a, b) => {
      const nominalA = parseFloat(a.nominalPengeluaran || a.nominalPemasukan);
      const nominalB = parseFloat(b.nominalPengeluaran || b.nominalPemasukan);
      return nominalB - nominalA;
    });
  } else if (sortBy === "nominalTerkecil") {
    combinedData.sort((a, b) => {
      const nominalA = parseFloat(a.nominalPengeluaran || a.nominalPemasukan);
      const nominalB = parseFloat(b.nominalPengeluaran || b.nominalPemasukan);
      return nominalA - nominalB;
    });
  }

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    console.log(`sortBy changed to: ${e.target.value}`);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    console.log(`filter changed to: ${e.target.value}`);
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const formatNominal = (nominal, isIncome) => {
    const formattedNominal = parseFloat(nominal).toLocaleString("id-ID");
    return `${isIncome ? "+" : "-"} Rp. ${formattedNominal}`;
  };

  useEffect(() => {
    const totalPemasukan = pemasukanData.reduce((total, item) => total + parseFloat(item.nominalPemasukan), 0);
    const totalPengeluaran = pengeluaranData.reduce((total, item) => total + parseFloat(item.nominalPengeluaran), 0);
    setTotalPemasukan(totalPemasukan);
    setTotalPengeluaran(totalPengeluaran);
    setTotalSaldo(totalPemasukan - totalPengeluaran);
  }, [pemasukanData, pengeluaranData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = combinedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalItems = combinedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleDelete = (uid, isIncome) => {
    Swal.fire({
      title: "Apakah Anda yakin ingin menghapus data ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const db = getDatabase();
        const refPath = isIncome ? `databaseKeuangan/pemasukan/${uid}` : `databaseKeuangan/pengeluaran/${uid}`;
        remove(firebaseRef(db, refPath))
          .then(() => {
            Swal.fire("Dihapus!", "Data berhasil dihapus.", "success");
          })
          .catch((error) => {
            Swal.fire("Kesalahan!", "Terjadi kesalahan saat menghapus data: " + error.message, "error");
          });
      }
    });
  };

  const handleEdit = (uid, isIncome) => {
    if (isIncome) {
      navigate(`/AdminEditPemasukan/${uid}`);
    } else {
      navigate(`/AdminEditPengeluaran/${uid}`);
    }
  };

  const renderTotals = () => {
    if (filter === "semua") {
      return (
        <>
          <div className="flex justify-center mt-4">
            <h2 className="text-lg font-bold text-black">Total Saldo: Rp. {totalSaldo.toLocaleString("id-ID")}</h2>
          </div>
        </>
      );
    } else if (filter === "pemasukan") {
      return (
        <div className="flex justify-center mt-4">
          <h2 className="text-lg font-bold text-black">Total Pemasukan: Rp. {totalPemasukan.toLocaleString("id-ID")}</h2>
        </div>
      );
    } else if (filter === "pengeluaran") {
      return (
        <div className="flex justify-center mt-4">
          <h2 className="text-lg font-bold text-black">Total Pengeluaran: Rp. {totalPengeluaran.toLocaleString("id-ID")}</h2>
        </div>
      );
    }
  };

  return (
    <AuthenticatedAdmin>
      <div className="min-h-screen w-full bg-white justify-center">
        <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-white text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <h1 className="text-white text-[25px] mt-[5px] mb-[10px] font-bold text-center">Tabel Admin Keuangan</h1>
        </div>
        <div className="px-[24px] mt-[30px]">
          <h1 style={{ fontSize: "23px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "15px" }}>Laporan Keuangan Masjid</h1>
          <div className="flex justify-center items-center mb-4 text-black">
            <div className="mr-4">
              <label className="mr-2">Tanggal Mulai:</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="px-2 py-1 border rounded-md text-black" />
            </div>
            <div>
              <label className="mr-2">Tanggal Selesai:</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="px-2 py-1 border rounded-md text-black" />
            </div>
          </div>
          <div className="flex justify-center mb-4 mr-[50px]">
            <label className="mr-2">Filter: </label>
            <div className="flex items-center mr-4">
              <div className="flex items-center justify-center">
                <input type="radio" id="semua" name="filter" value="semua" checked={filter === "semua"} onChange={handleFilterChange} />
                <label htmlFor="semua" className="ml-2" style={{ color: "black" }}>
                  Semua
                </label>
              </div>
            </div>
            <div className="flex items-center mr-4">
              <div className="flex items-center justify-center">
                <input type="radio" id="pemasukan" name="filter" value="pemasukan" checked={filter === "pemasukan"} onChange={handleFilterChange} />
                <label htmlFor="pemasukan" className="ml-2" style={{ color: "black" }}>
                  Pemasukan
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <input type="radio" id="pengeluaran" name="filter" value="pengeluaran" checked={filter === "pengeluaran"} onChange={handleFilterChange} />
                <label htmlFor="pengeluaran" className="ml-2" style={{ color: "black" }}>
                  Pengeluaran
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="mr-4">
              <select value={sortBy} onChange={handleSortByChange} className="px-3 py-1 border rounded-md text-black">
                <option value="">Pilih kriteria sortir</option>
                <option value="nominalTerbesar">Nominal Terbesar</option>
                <option value="nominalTerkecil">Nominal Terkecil</option>
              </select>
            </div>
          </div>
          <div className="mb-2 flex justify-center">
            <p className="text-sm text-gray-500 mr-2">
              Halaman {currentPage} dari {totalPages}
            </p>
          </div>
          <div className="flex justify-center overflow-x-auto">
            <table className="min-w-full border-collapse border border-[#000000] table-auto">
              <thead>
                <tr>
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Tanggal</th>
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Nama</th>
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Nominal</th>
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">User</th>
                  {/* <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Aksi</th> */}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => {
                  const isIncome = item.hasOwnProperty("nominalPemasukan");
                  return (
                    <tr key={item.uid}>
                      <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                        {formatDate(item.tanggalPengeluaran || item.tanggalPemasukan)}
                      </td>
                      <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                        {item.namaPengeluaran || item.namaPemasukan}
                      </td>
                      <td className={`text-center border border-[#000000] ${isIncome ? "text-green-500" : "text-red-500"}`} style={{ fontSize: "12px", padding: "5px" }}>
                        {formatNominal(item.nominalPengeluaran || item.nominalPemasukan, isIncome)}
                      </td>
                      <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                        {item.username}
                      </td>
                      {/* <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}> */}
                      {/* <button onClick={() => handleEdit(item.uid, isIncome)} className="text-blue-500 mr-2">
                          Edit
                        </button> */}
                      {/* <button onClick={() => handleDelete(item.uid, isIncome)} className="text-red-500">
                          Hapus
                        </button> */}
                      {/* </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {renderTotals()}
          <div className="flex justify-center mt-4">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md mr-2">
              Sebelumnya
            </button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentItems.length < itemsPerPage || currentPage === totalPages} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </AuthenticatedAdmin>
  );
};

export default AdminKeuangan;