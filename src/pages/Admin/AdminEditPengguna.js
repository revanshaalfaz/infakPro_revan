import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { ref, set, get, remove, getDatabase } from "firebase/database";
import { database } from "../../Database/Fire";
import Swal from "sweetalert2";

const AdminEditPengguna = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [telpn, setTelpn] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (id) {
      const db = getDatabase();
      const userRef = ref(db, `users/${id}`);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setEmail(data.email);
          setName(data.name);
          setPassword(data.password);
          setTelpn(data.telpn);
          setAddress(data.address);
        }
      });
    }
  }, [id]);

  const handleSaveUser = () => {
    set(ref(database, `users/${id}`), {
      uid: id,
      email,
      name,
      password,
      telpn,
      address,
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Success",
        color: "#000",
        buttonsStyling: true,
        confirmButtonColor: "#006A0B",
        text: "Data berhasil diperbarui",
      }).then(() => {
        navigate("/AdminPengguna");
      });
    });
  };

  const handleDeleteUser = () => {
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
        remove(ref(db, `users/${id}`))
          .then(() => {
            Swal.fire("Dihapus!", "Data pengguna berhasil dihapus.", "success").then(() => {
              navigate("/user-management");
            });
          })
          .catch((error) => {
            Swal.fire("Kesalahan!", "Terjadi kesalahan saat menghapus data: " + error.message, "error");
          });
      }
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#EFF2F6] justify-center">
      <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
        <div className="flex justify-start">
          <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
        </div>
        <h1 className="text-[25px] mt-[5px] mb-[10px] font-semibold text-center">Perbarui Data Pengguna</h1>
      </div>
      <div className="px-[24px] mt-[40px]">
        <div>
          <Label forInput="email" value="Email" text="text-black font-semibold text-lg" />
          <TextInput color="black" type="email" name="email" autoComplete="email" isFocused={true} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukan Email" border="border-[#7C7C7C]" />
        </div>

        <div>
          <Label forInput="name" value="Nama Pengguna" text="text-black font-semibold mt-[20px] text-lg" />
          <TextInput color="black" type="text" name="name" autoComplete="name" isFocused={true} value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukan Nama Pengguna" border="border-[#7C7C7C]" />
        </div>

        <div>
          <Label forInput="password" value="Password" text="text-black font-semibold mt-[20px] text-lg" />
          <TextInput color="black" type="text" name="password" autoComplete="password" isFocused={true} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Password" border="border-[#7C7C7C]" />
        </div>

        <div>
          <Label forInput="telpn" value="Telepon" text="text-black font-semibold mt-[20px] text-lg" />
          <TextInput color="black" type="text" name="telpn" autoComplete="telpn" isFocused={true} value={telpn} onChange={(e) => setTelpn(e.target.value)} placeholder="Masukan Nomor Telepon" border="border-[#7C7C7C]" />
        </div>

        <div>
          <Label forInput="address" value="Alamat" text="text-black font-semibold mt-[20px] text-lg" />
          <TextInput color="black" type="text" name="address" autoComplete="address" isFocused={true} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Masukan Alamat" border="border-[#7C7C7C]" />
        </div>

        <div className="flex justify-center">
          <Button text="Perbarui" gap="gap-[5px]" color="w-[200px] bg-[#357AFF] shadow shadow-md shadow-black mb-[15px] mt-[30px]" onClick={handleSaveUser} />
          {/* <Button text="Hapus" gap="gap-[5px]" color="w-[200px] bg-[#d33] shadow shadow-md shadow-black mb-[15px] mt-[30px] ml-[10px]" onClick={handleDeleteUser} /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminEditPengguna;
