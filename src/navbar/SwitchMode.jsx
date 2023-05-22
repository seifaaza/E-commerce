import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const SwitchMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const style = "cursor-pointer hover:text-orange-500";

  return (
    <Link className={style} onClick={handleThemeSwitch}>
      {" "}
      <span className="mr-1 laptop:hidden">Thème </span>
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </Link>
  );
};

export default SwitchMode;
