import { create } from "zustand";
import axios from "axios";

const productStore = create((set) => ({
  products: null,
  product: null,
  pageNum: 1,
  pageSize: 25,
  pageCount: 1,

  quantity: 1,

  saved: false,
  savedItemId: [],

  marketModal: false,

  buyModal: false,

  searchedProducts: [],

  acheter: false,

  acheterToggle: () => {
    const { acheter } = productStore.getState();
    set({ acheter: !acheter });
  },

  reduceQuantity: () => {
    const { quantity } = productStore.getState();
    set({ quantity: Math.max(quantity - 1, 1) });
  },
  increaseQuantity: () => {
    const { quantity } = productStore.getState();
    set({ quantity: quantity + 1 });
  },

  handleSaved: (itemId) => {
    const { savedItemId } = productStore.getState();
    set((state) => {
      return {
        savedItemId: [...state.savedItemId, itemId],
      };
    });
    // console.log(savedItemId);
  },

  handleOpen: () => {
    set({ marketModal: true, buyModal: false });
  },

  handleClose: () => {
    set({ marketModal: false, acheter: false });
  },

  buyModalSwitch: (itemId) => {
    const { buyModal } = productStore.getState();
    set({ buyModal: true });
    // console.log(buyModal);
  },

  showModalSwitch: () => {
    set({ buyModal: false });
  },

  fetchProducts: async () => {
    const { pageNum, pageSize } = productStore.getState();
    const res = await axios.get(
      `https://srv2.aptusmaroc.com/products/public?page_size=${pageSize}`
    );
    set({
      products: res.data.data,
      pageCount: res.data.pagination.prev_page + 1,
    });
  },

  handleChange: (e, p) => {
    set({ pageNum: p });
  },

  handleSearch: (e) => {
    const { products } = productStore.getState();
    const searchedProducts = products.filter((newProducts) => {
      const searchInput = e.target.value;
      return newProducts.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    set({ searchedProducts: searchedProducts });
  },

  fetchProductsOnce: () => {
    const { products } = productStore.getState();
    set({ searchedProducts: products });
    // console.log(products);
  },

  fetchProduct: async (_id) => {
    // const res = await axios.delete(`/team/${_id}`);
    const res = await axios.get(
      `https://srv2.aptusmaroc.com/products/public/${_id}`
    );
    set({
      product: res.data,
    });
    const { product, handleOpen } = productStore.getState();
    handleOpen();
    console.log(product);
  },
}));

export default productStore;
