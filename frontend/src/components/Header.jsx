import React from "react";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center mx-5 h-[80px] border-b-2 border-light">
      <div className="text-light font-bold text-xl">ADMIN DASHBOARD</div>
      <div className="text-light flex flex-row ">
        <div className="ml-8">SALES</div>
        <div className="ml-8">ORDERS</div>
        <div className="ml-8">BAR CHART</div>
      </div>
    </nav>
  );
};

export default Header;
