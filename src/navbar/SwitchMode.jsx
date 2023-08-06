import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import mainStore from "../store/MainStore";

const SwitchMode = () => {
  const store = mainStore();

  useEffect(() => {
    if (store.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [store.theme]);

  // console.log(store.cookies.cookies.switchTheme);

  return (
    <Link
      className="cursor-pointer hover:text-orange-500"
      onClick={store.handleThemeSwitch}
    >
      {" "}
      <span className="mr-1 laptop:hidden">Thème </span>
      {store.theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      {/* {console.log(store.cookies.cookies.switchTheme)} */}
    </Link>
  );
};

export default SwitchMode;
