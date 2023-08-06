import { create } from "zustand";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";

const mainStore = create((set) => ({
  navOpen: false,
  theme: "light",

  cookies: new Cookies(),

  handleThemeSwitch: () => {
    const { theme, navOpen, cookies } = mainStore.getState();
    set({
      theme: theme === "dark" ? "light" : "dark",
      navOpen: !navOpen,
    });
    cookies.set("switchTheme", theme, {
      expires: new Date(1690981162 * 1000),
    });
  },

  handleNavOpen: () => {
    const { navOpen } = mainStore.getState();
    set({ navOpen: !navOpen });
  },
  handleNavClose: () => {
    set({ navOpen: false });
  },
}));

export default mainStore;
