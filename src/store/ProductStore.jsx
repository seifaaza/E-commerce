import { create } from "zustand";
import axios from "axios";

const productStore = create((set) => ({
  products: null,

  fetchProducts: async () => {
    const res = await axios.get(
      "/https://srv2.aptusmaroc.com/products?page_size=25&page_num=1"
    );
    set({ products: res.data.data });
  },
}));

export default productStore;
