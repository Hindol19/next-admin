import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import { useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useRouter } from "next/router";
const NavMenu = ({
  username,
  mode,
  setMode,
  logOut,
  toggleBar,
  togglePi,
  bar,
}) => {
  return (
    <div className="min-w-[70vw] flex flex-col justify-evenly z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/60 rounded-lg backdrop-blur-md py-32">
      <div className=" h-full flex items-center text-2xl dark:text-dark text-light border-b-2 dark:border-dark border-opacity-40 mb-10">
        Welcome
        <span className="font-bold ml-2  flex items-center">{username}</span>
      </div>
      <div className="dark:text-dark text-light flex flex-col justify-center items-center text-md font-semibold">
        <div
          className={`mt-3 cursor-pointer ${bar && "  text-acc"}`}
          onClick={toggleBar}
        >
          DASHBOARD
        </div>
        <div
          className={`mt-3 cursor-pointer ${!bar && "  text-acc"}`}
          onClick={togglePi}
        >
          PIE CHART
        </div>
        <div className="mt-3 cursor-pointer" onClick={logOut}>
          LOG OUT
        </div>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={` flex items-center justify-center rounded-full p-1 mt-3`}
        >
          {mode === "dark" ? (
            <Brightness7Icon className="dark:text-dark text-light" />
          ) : (
            <Brightness2Icon className="dark:text-dark text-light " />
          )}
        </button>
      </div>
    </div>
  );
};
const Header = ({ username, bar = true, setBar }) => {
  const [mode, setMode] = useThemeSwitcher();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    if (isNavOpen) setIsNavOpen(false);
    else setIsNavOpen(true);
  };

  const router = useRouter();
  const logOut = () => {
    localStorage.clear();
    // console.log(localStorage);
    router.push("/login");
  };

  const toggleBar = () => {
    if (!bar) setBar(true);
  };

  const togglePi = () => {
    if (bar) setBar(false);
  };
  return (
    <>
      <nav className="flex flex-row justify-between items-center mx-12 h-[80px] border-b-2 dark:border-light border-dark md:hidden">
        <div className="dark:text-light font-bold text-xl flex items-center">
          <AlignVerticalBottomIcon className="mr-5" />
          ARGON
        </div>
        <div className="dark:text-light text-dark flex flex-row h-full items-center">
          <div className="ml-8 h-full flex items-center">
            Welcome
            <span className="font-bold ml-2 border-r-2 dark:border-light border-dark pr-8 h-[50%] flex items-center">
              {username}
            </span>
          </div>
          <div
            className={`ml-8 px-2 py-1 rounded-md cursor-pointer ${
              bar && "  text-acc"
            }`}
            onClick={toggleBar}
          >
            BAR CHART
          </div>
          <div
            className={`ml-8 px-2 py-1 rounded-md cursor-pointer ${
              !bar && "  text-acc"
            }`}
            onClick={togglePi}
          >
            PIE CHART
          </div>
          <div
            className="ml-8 px-2 py-1 rounded-md cursor-pointer"
            onClick={logOut}
          >
            LOG OUT
          </div>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1`}
          >
            {mode === "dark" ? (
              <Brightness7Icon className="dark:text-light text-dark" />
            ) : (
              <Brightness2Icon className="dark:text-light text-dark " />
            )}
          </button>
        </div>
      </nav>
      {/* // FOR MOBILE */}
      <nav className="md:flex flex-row justify-between items-center mx-12 h-[80px] border-b-2 dark:border-light border-dark hidden ">
        <div className="dark:text-light text-dark font-bold text-xl sm:text-lg flex items-center">
          <AlignVerticalBottomIcon className="mr-5" />
          ARGON
        </div>
        <div className="dark:text-light text-dark flex flex-row h-full items-center">
          {isNavOpen ? (
            <CloseIcon onClick={toggleMenu} />
          ) : (
            <MenuIcon onClick={toggleMenu} />
          )}
          {isNavOpen && (
            <NavMenu
              username={username}
              mode={mode}
              setMode={setMode}
              logOut={logOut}
              toggleBar={toggleBar}
              togglePi={togglePi}
              bar={bar}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
