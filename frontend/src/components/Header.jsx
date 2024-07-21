import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const NavMenu = ({ username }) => {
  return (
    <div className="min-w-[70vw] flex flex-col justify-evenly z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/60 rounded-lg backdrop-blur-md py-32">
      <div className=" h-full flex items-center text-2xl text-dark border-b-2 border-dark border-opacity-40 mb-10">
        Welcome
        <span className="font-bold ml-2  flex items-center">{username}</span>
      </div>
      <div className="text-dark flex flex-col justify-center items-center text-md font-semibold">
        <div className="mt-3">DASHBOARD</div>
        <div className="mt-3">PIE CHART</div>
        <div className="mt-3">Mode</div>
      </div>
    </div>
  );
};
const Header = ({ username, isMobile }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    if (isNavOpen) setIsNavOpen(false);
    else setIsNavOpen(true);
  };

  return (
    // <nav className="flex flex-row justify-between items-center mx-12 h-[80px] border-b-2 border-light">
    //   <div className="text-light font-bold text-xl">ARGON</div>
    //   <div className="text-light flex flex-row h-full items-center">
    //     <div className="ml-8 h-full flex items-center">
    //       Welcome
    //       <span className="font-bold ml-2 border-r-2 pr-8 h-[50%] flex items-center">
    //         {username}
    //       </span>
    //     </div>
    //     <div className="ml-8">DASHBOARD</div>
    //     <div className="ml-8">PIE CHART</div>
    //     <div className="ml-8">Mode</div>
    //   </div>
    // </nav>

    // FOR MOBILE
    <nav className="flex flex-row justify-between items-center mx-12 h-[80px] border-b-2 border-light">
      <div className="text-light font-bold text-xl">ARGON</div>
      <div className="text-light flex flex-row h-full items-center">
        {isNavOpen ? (
          <CloseIcon onClick={toggleMenu} />
        ) : (
          <MenuIcon onClick={toggleMenu} />
        )}
        {isNavOpen && <NavMenu username={username} />}
      </div>
    </nav>
  );
};

export default Header;
