import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navigationLinks } from "./MenuListUser";
import { signOut } from "firebase/auth";
import { auth } from "../../Database/Fire";

export default function Navbar() {
  const [selected, setSelected] = useState(null);
  const { pathname } = useLocation();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("uid");
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="navbar mobile" style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 100, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      {navigationLinks.map((item, index) => {
        const isActive = pathname === item.link;

        return (
          <NavLink to={item.link} key={item.link} onClick={() => setSelected(isActive ? null : index)} style={{ textAlign: "center", flex: 1 }}>
            <div className={`p-[7px] rounded-[7px] ${selected === index || isActive ? "bg-white text-green-600" : "bg-[#0C8F8F] text-white"}`}>
              <div style={{ color: selected === index || isActive ? "#0C8F8F" : "inherit" }}>{item.icon}</div>
            </div>
          </NavLink>
        );
      })}
      <div onClick={signOutHandler} className="icon-container logout" style={{ textAlign: "center", flex: 1 }}>
        <div className={`p-[7px] rounded-[7px] text-white`}>
          <i className="bx bx-log-out text-[20px]" style={{ color: selected === null ? "#ffffff" : "inherit" }}></i>
        </div>
      </div>
    </nav>
  );
}
