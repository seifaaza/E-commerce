import { create } from "zustand";

const mainStore = create((set) => ({
  navOpen: false,

  handleNavOpen: () => {
    const { navOpen } = mainStore.getState();
    set({ navOpen: !navOpen });
  },
}));

export default mainStore;
