import { useState } from "react";
import SignUp from "./Signup";
import Login from "./Login";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function Connexion() {
  const [signSwitch, setSignSwitch] = useState("");
  const SignSwitch = (SignEvent) => {
    setSignSwitch(SignEvent);
  };

  return (
    <div className="connexion-bg relative h-screen">
      <div
        className="relative pt-16 h-full after:absolute after:w-full after:h-full after:bg-gradient-to-r 
    after:from-white dark:after:from-dark after:to-transparent after:top-0 
    backdrop-grayscale dark:backdrop-brightness-50 dark:backdrop-contrast-200 backdrop-opacity-80 "
      >
        <div
          className=" py-10 main-container bg-blend-overlay h-full w-full px-3 flex flex-col 
      tablet:flex-row justify-between items-center gap-10 laptop:gap-28 laptop:px-8 tablet:pt-24 laptop:py-20"
        >
          <div
            className="z-10 heading text-center items-center 
        tablet:items-start tablet:text-start font-main text-slate-900 w-4/12"
          >
            {signSwitch === "signUp" ? (
              <SignUp SignSwitch={SignSwitch} />
            ) : signSwitch === "login" || signSwitch === "" ? (
              <Login SignSwitch={SignSwitch} />
            ) : null}
          </div>
        </div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7190.46 565.62"
          className="fill-white dark:fill-dark absolute bottom-0"
        >
          <defs></defs>
          <path
            className="cls-1"
            d="M.46,338C448.39,184.4,1121.68,8.6,1941.46,15c790.7,6.17,1295.43,178.55,1769,277,772.58,160.6,1917,219,3480-292L7190,565.62H0"
          />
        </svg>
      </div>
    </div>
  );
}
