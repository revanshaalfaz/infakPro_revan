import React from "react";
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../Database/Fire";
import Swal from "sweetalert2";
import { ref, serverTimestamp, set } from "firebase/database";
import Button from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [telpn, setTelpn] = React.useState("");
  const [address, setAddress] = React.useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    // Validasi untuk memastikan semua inputan telah diisi
    if (!email || !password || !name || !telpn || !address) {
      Swal.fire({
        icon: "warning",
        title: "Peringatan",
        text: "Semua inputan wajib diisi!",
        confirmButtonColor: "#770700",
      });
      return; // Hentikan proses registrasi jika ada inputan yang kosong
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((success) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          color: "#000",
          buttonsStyling: true,
          confirmButtonColor: "#006A0B",
          text: "Berhasil Membuat Akun",
        });

        const uid = success.user.uid;
        const timestamp = serverTimestamp();
        set(ref(database, `users/${uid}/`), {
          role: "user",
          email: email,
          name: name,
          telpn: telpn,
          uid: uid,
          address: address,
          registeredAt: timestamp,
        });

        navigate("/login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Email Telah Digunakan",
            color: "#000",
            buttonsStyling: true,
            confirmButtonColor: "#770700",
            text: "Email sudah terdaftar. Harap gunakan email lain.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Opps....",
            color: "#000",
            buttonsStyling: true,
            confirmButtonColor: "#770700",
            text: "Proses Sign Up Gagal",
          });
        }
      });
  };

  return (
    <div className="min-h-screen w-full bg-[#EFF2F6] justify-center">
      <div className="w-full h-[82px] bg-[#0C8F8F] rounded-b-[40px] mb-[80px]"></div>
      <h1 className="text-center text-[40px] font-bold text-[#0C8F8F]">LockInfak</h1>
      <div className="px-[24px] mt-[20px]">
        <div>
          <Label forInput="fullname" value="Nama" text="text-black font-semibold" />
          <TextInput color="black" type="text" name="fullname" autoComplete="username" isFocused={true} value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukan Nama" border="border-[#7C7C7C]" />
        </div>
        <div>
          <Label forInput="telpn" value="Nomor Telepon" text="text-black font-semibold mt-[20px]" />
          <TextInput color="black" type="tel" name="telpn" autoComplete="username" isFocused={true} value={telpn} onChange={(e) => setTelpn(e.target.value)} placeholder="Masukan Nomor Telepon" border="border-[#7C7C7C]" />
        </div>
        <div>
          <Label forInput="email" value="Email" text="text-black font-semibold mt-[20px]" />
          <TextInput color="black" type="email" name="email" autoComplete="username" isFocused={true} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukan Email" border="border-[#7C7C7C]" />
        </div>
        <div>
          <Label forInput="password" value="Sandi" text="text-black mt-[20px] font-semibold" />
          <TextInput color="black" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Sandi" autoComplete="current-password" border="border-[#7C7C7C]" />
        </div>
        <div>
          <Label forInput="address" value="Alamat" text="text-black mt-[20px] font-semibold" />
          <TextArea color="black" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Masukan Alamat" border="border-[#7C7C7C]" />
        </div>
        <Button onClick={handleRegister} width="w-full" text="Daftar" height="h-[50px]" color="bg-[#0C8F8F] shadow-md shadow-[#473F97] mt-[50px]" />
      </div>
      <div className="flex text-black justify-center items-center h-[55px] mt-[18px]">
        <h1 className="text-[15px]">
          Sudah Punya Akun?{" "}
          <NavLink to="/login">
            <span className="font-semibold">Masuk</span>
          </NavLink>
        </h1>
      </div>
    </div>
  );
}
