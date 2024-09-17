import React, { useState } from "react";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import AuthenticatedUser from "../Layouts/Authenticated";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { auth, database } from "../Database/Fire";
import Swal from "sweetalert2";
import { ref, update } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Profile = ({ dataUser }) => {
  const uid = localStorage.getItem("uid");
  const [currentPassword, setCurrentPassword] = useState("");
  const [pubdet, setPubdet] = React.useState("");
  const navigate = useNavigate();

  const handleEdit = (uid) => {
    navigate(`/AdminEditPengguna/${uid}`);
  };

  // const handleUpdate = () => {
  //   const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
  //   reauthenticateWithCredential(auth.currentUser, credential)
  //     .then(() => {
  //       updatePassword(auth.currentUser, pubdet)
  //         .then(() => {
  //           const data = { password: pubdet };
  //           Swal.fire({
  //             icon: "success",
  //             title: "Success",
  //             color: "#000",
  //             buttonsStyling: true,
  //             confirmButtonColor: "#006A0B",
  //             text: "Kata Sandi Berhasil Diubah ",
  //           });
  //           update(ref(database, `users/${uid}/`), data);
  //           setCurrentPassword("");
  //           setPubdet("");
  //         })
  //         .catch((error) => {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Opps....",
  //             color: "#000",
  //             buttonsStyling: true,
  //             confirmButtonColor: "#770700",
  //             text: "Gagal Mengubah Kata Sandi",
  //           });
  //         });
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Opps....",
  //         color: "#000",
  //         buttonsStyling: true,
  //         confirmButtonColor: "#770700",
  //         text: "Gagal Mengubah Kata Sandi",
  //       });
  //     });
  // };

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
            <h1 className="text-[25px] font-semibold mb-[30px] mt-[-35px]">Profile Pengguna</h1>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[20px]">
          <img alt="avatar" src="/images/avatar.jpg" className="rounded-full h-[150px] w-[150px] object-cover border border-black border-4" />
        </div>
        <div className="flex justify-center mt-[40px]">
          <div className="sm:w-[370px] w-full px-4">
            <div className="flex flex-col gap-6">
              <div>
                <Label forInput="name" value="Nama Pengguna" text="text-black font-semibold" />
                <div className="text-black rounded-md p-2">{dataUser?.name}</div>
              </div>
              <div>
                <Label forInput="email" value="Email" text="text-black font-semibold" />
                <div className="text-black rounded-md p-2">{dataUser?.email}</div>
              </div>
              <div>
                <Label forInput="alamat" value="Alamat" text="text-black font-semibold" />
                <div className="text-black rounded-md p-2">{dataUser?.address}</div>
              </div>
              <div>
                <Label forInput="email" value="Nomor Telepon" text="text-black font-semibold" />
                <div className="text-black rounded-md p-2">{dataUser?.telpn}</div>
              </div>
              {/* <div>
                <Label forInput="password" value="Kata Sandi Lama" text="text-black font-semibold" />
                <TextInput
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  color="black"
                  type="password"
                  name="password"
                  placeholder="Masukan kata sandi lama"
                  autoComplete="current-password"
                  border="border-black rounded-md"
                  className="w-full"
                />
              </div>
              <div>
                <Label forInput="password" value="Kata Sandi Baru" text="text-black font-semibold" />
                <TextInput
                  value={pubdet}
                  onChange={(e) => setPubdet(e.target.value)}
                  color="black"
                  type="password"
                  name="password"
                  placeholder="Masukan kata sandi baru"
                  autoComplete="current-password"
                  border="border-black rounded-md"
                  className="w-full"
                />
              </div> */}
              <div className="flex justify-center mb-[100px]">
                <Button onClick={() => handleEdit(dataUser.uid)} width="w-[280px]" text="Perbarui Profil Pengguna" color="bg-[#357AFF] shadow-md shadow-black" gap="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default Profile;
