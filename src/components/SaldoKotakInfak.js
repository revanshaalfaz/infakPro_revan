import React from "react";
import { NavLink } from "react-router-dom";

const SaldoKotakInfak = () => {
  const totalSaldo = localStorage.getItem("totalSaldo");
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const formattedSaldo = formatter.format(totalSaldo);
  return (
    <NavLink to="">
      <div className="flex flex-col items-center bg-[#0C8F8F] rounded-[10px] h-[110px] p-4">
        <h1 className="text-[18px] font-medium mb-2 text-center">Saldo Keuangan</h1>
        <h1 className="text-[35px] font-semibold text-center">{formattedSaldo}</h1>
      </div>
    </NavLink>
  );
};

export default SaldoKotakInfak;
