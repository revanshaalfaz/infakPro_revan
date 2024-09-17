import React, { useState } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Database/Fire";
import { navigationLinks } from "./MenuListAdmin";

export default function Navbar() {
  const [selected, setSelected] = useState(null);
  const { pathname } = useLocation();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("uid");
        return <Navigate to="/login" />;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav style={{ width: "100%", display: "flex", justifyContent: "space-between", position: "absolute", bottom: "0" }} className="navbar mobile">
      {navigationLinks.map((item, index) => {
        const isActive = pathname === item.link;

        return (
          <NavLink to={item.link} key={item.link} onClick={() => setSelected(isActive ? null : index)} style={{ flex: 1, textAlign: "center" }}>
            <div className={`p-[7px] rounded-[7px] ${selected === index || isActive ? "bg-white text-green-600" : " text-white"}`}>
              <div style={{ color: selected === index || isActive ? "#0C8F8F" : "inherit" }}>{item.icon}</div>
            </div>
          </NavLink>
        );
      })}
      <div onClick={signOutHandler} style={{ flex: 1, textAlign: "center" }}>
        <div className="p-[7px] rounded-[7px] text-white">
          <i className="bx bx-log-out text-[20px]" style={{ color: selected === null ? "#ffffff" : "inherit" }}></i>
        </div>
      </div>
    </nav>
  );
}
