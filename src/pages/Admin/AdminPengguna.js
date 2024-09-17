import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref as firebaseRef, onValue as firebaseOnValue, remove } from "firebase/database";
import AuthenticatedUser from "../../Layouts/Authenticated";
import Swal from "sweetalert2";
import AuthenticatedAdmin from "../../Layouts/AuthenticatedAdmin";

const AdminPengguna = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const db = getDatabase();
    const usersRef = firebaseRef(db, "users");
    const unsubscribe = firebaseOnValue(usersRef, (snapshot) => {
      const usersList = [];
      const usersObj = snapshot.val();
      for (let uid in usersObj) {
        usersList.push({ uid, ...usersObj[uid] });
      }
      setUsersData(usersList);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  const handleEdit = (uid) => {
    navigate(`/AdminEditPengguna/${uid}`);
  };

  const handleDelete = (uid) => {
    Swal.fire({
      title: "Apakah Anda yakin ingin menghapus data pengguna ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const db = getDatabase();
        remove(firebaseRef(db, `users/${uid}`))
          .then(() => {
            Swal.fire("Dihapus!", "Data pengguna berhasil dihapus.", "success");
          })
          .catch((error) => {
            Swal.fire("Kesalahan!", "Terjadi kesalahan saat menghapus data: " + error.message, "error");
          });
      }
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalItems = usersData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <AuthenticatedAdmin>
      <div className="min-h-screen w-full bg-white justify-center">
        <style>{`
          table {
            width: 100%;
            border-collapse: collapse;
          }

          th, td {
            padding: 4px;
            text-align: center;
            border: 1px solid #ddd;
            font-size: 10px;
          }

          @media (max-width: 768px) {
            table {
              width: 100%;
            }

            th, td {
              padding: 2px;
              font-size: 8px;
            }
          }

          .overflow-x-auto {
            overflow-x: auto;
          }
        `}</style>
        <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-white text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <h1 className="text-white text-[25px] mt-[5px] mb-[10px] font-bold text-center">Manajemen Pengguna</h1>
        </div>
        <div className="px-[24px] mt-[30px]">
          <h1 style={{ fontSize: "23px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "15px" }}>Daftar Pengguna</h1>
          <div className="mb-2 flex justify-center">
            <p className="text-sm text-gray-500 mr-2">
              Halaman {currentPage} dari {totalPages}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-[#000000] table-auto">
              <thead>
                <tr>
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Email</th>
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Nama</th>
                  {/* <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Password</th> */}
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Telepon</th>
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-20 py-1">Alamat</th>
                  <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-1 py-1">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user) => (
                  <tr key={user.uid}>
                    <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                      {user.email}
                    </td>
                    <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                      {user.name}
                    </td>
                    {/* <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                      {user.password}
                    </td> */}
                    <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                      {user.telpn}
                    </td>
                    <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                      {user.address}
                    </td>
                    <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "12px", padding: "5px" }}>
                      {/* <button onClick={() => handleEdit(user.uid)} className="text-blue-500 mr-2">
                        Edit
                      </button> */}
                      <button onClick={() => handleDelete(user.uid)} className="text-red-500">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default AdminPengguna;
