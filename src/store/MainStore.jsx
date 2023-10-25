import { create } from "zustand";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";

const mainStore = create((set) => ({
  footer: true,

  navOpen: false,
  theme: "light",
  squareView: false,
  languages: ["en", "fr", "ar"],
  choosenLang: "fr",
  selectedLang: 1,

  cookies: new Cookies(),

  disableFooter: () => {
    set({ footer: false });
  },

  changeProductsView: () => {
    const { squareView } = mainStore.getState();
    set({ squareView: !squareView });
  },

  handleLangSwitch: (event, index) => {
    const { languages } = mainStore.getState();
    set({ choosenLang: languages[index], selectedLang: index });
  },

  handleThemeSwitch: () => {
    const { theme, navOpen, cookies } = mainStore.getState();
    set({
      theme: theme === "dark" ? "light" : "dark",
      navOpen: false,
    });
    // cookies.set("switchTheme", theme, {
    //   expires: new Date(1690981162 * 1000),
    // });
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
