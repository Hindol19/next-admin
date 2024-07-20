import React from "react";

const Header = ({ username }) => {
  return (
    <nav className="flex flex-row justify-between items-center mx-5 h-[80px] border-b-2 border-light">
      <div className="text-light font-bold text-xl">ADMIN DASHBOARD</div>
      <div className="text-light flex flex-row ">
        <div className="ml-8">Welcome {username}</div>
        <div className="ml-8">PIE CHART</div>
        <div className="ml-8">Mode</div>
      </div>
    </nav>
  );
};

export default Header;
