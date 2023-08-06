import { useState } from "react";
import { navData } from "./navData";
import MenuItems from "./MenuItems";
import SwitchMode from "./SwitchMode";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import mainStore from "../store/MainStore";

export default function Navbar() {
  const store = mainStore();
  const ScrollToTop = () => {
    store.handleNavClose(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const [showCTA, setShowCTA] = useState(false);
  const show = () => {
    window.scrollY >= 700 ? setShowCTA(true) : setShowCTA(false);
  };
  window.addEventListener("scroll", show);
  return (
    <nav className="bg-white dark:bg-dark fixed p-2 px-4 font-main w-full z-50 text-slate-600">
      <div className="main-container flex flex-col flex-wrap laptop:items-center laptop:flex-row justify-between dark:text-white">
        <div className="flex justify-between">
          <Link to="/" onClick={ScrollToTop}>
            <img src="/assets/svg/QB-logo.svg" alt="" className="h-12" />
          </Link>
          <div
            className={`cursor-pointer nav-icon ${
              store.navOpen ? "nav-open" : ""
            }`}
            onClick={store.handleNavOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={`flex flex-col justify-start  ${
            store.navOpen ? "h-screen pt-10 duration-500 transition-all" : "h-0"
          } laptop:h-fit laptop:p-0 laptop:transition-none`}
        >
          <ul className="overflow-scroll remove-scrollbar laptop:overflow-visible laptop:max-h-fit flex flex-col laptop:flex-row gap-8 laptop:p-0 laptop:w-fit justify-between items-center text-start whitespace-nowrap text-xl laptop:text-sm font-medium">
            {navData.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
            <SwitchMode />
            <div
              className={`${
                showCTA ? "hidden laptop:block" : "hidden"
              } z-40 cursor-pointer whitespace-nowrap`}
            >
              <Button
                component={Link}
                to="/demander-un-service"
                variant="contained"
                className="btn btn-contained"
                endIcon={<ArrowForwardIcon />}
              >
                Demander un service
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
