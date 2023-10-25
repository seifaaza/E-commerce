import SearchBar from "./SearchBar";
import MarketFilter from "./MarketFilter";
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TextField from "@mui/material/TextField";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AcheterModal from "./modals/AcheterModal";
import ShowProductModal from "./modals/ShowProductModal";
import Pagination from "@mui/material/Pagination";
import productStore from "../../store/ProductStore";
import mainStore from "../../store/MainStore";
import ProductsView from "./ProductsView";

export default function Market() {
  const store = productStore();
  const princStore = mainStore();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minHeight: "90vh",
  };

  useEffect(() => {
    store.fetchProducts();
    return () => {
      return false;
    };
  }, [store.pageNum]);

  useEffect(() => {
    store.fetchProductsOnce();
    return () => {
      return false;
    };
  }, [store.products]);

  return (
    <div className="main-container font-main py-20 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-12 laptop:px-0 ">
      <div className="flex flex-col-reverse gap-3 tablet:flex-row justify-between w-full">
        <MarketFilter />
        <span className="flex justify-between items-center">
          <SearchBar />
          <span className="tablet:hidden">
            <ProductsView />
          </span>
        </span>
      </div>
      <div
        className={` 
        ${
          princStore.squareView
            ? "grid grid-cols-2 tablet:grid tablet:grid-cols-main"
            : "flex flex-col tablet:grid tablet:grid-cols-main "
        }
          justify-start gap-2 tablet:gap-8 w-full`}
      >
        {" "}
        {store.searchedProducts &&
          store.searchedProducts.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex 
                ${princStore.squareView ? "flex-col" : ""}
                tablet:flex-col justify-between gap-3 bg-white dark:bg-dark rounded-xl p-2 cursor-pointer hover:scale-105 duration-300 hover:shadow-xl
                `}
                onClick={() => store.fetchProduct(item._id)}
              >
                <div
                  style={{
                    backgroundImage: `url(https://srv2.aptusmaroc.com/${
                      item.images ? item.images[0].link : "null"
                    })`,
                  }}
                  className={`
                  ${princStore.squareView ? "h-32" : "w-2/5 h-32"}
                   tablet:w-full tablet:h-52 rounded  bg-cover bg-no-repeat bg-center `}
                ></div>
                <div
                  className={`
                ${princStore.squareView ? "" : "w-3/5 tablet:w-full"}
                 flex flex-col gap-4 justify-between dark:text-slate-100 p-2 `}
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="whitespace-nowrap text-ellipsis overflow-hidden">
                      {item.name}
                    </h1>
                    <h3 className="font-semibold whitespace-nowrap">
                      {" "}
                      {item.price} MAD
                    </h3>
                  </div>
                  <div className="flex self-end gap-4">
                    <Button
                      size="large"
                      variant="contained"
                      className="btn btn-contained"
                      endIcon={<ShoppingCartIcon />}
                      onClick={() => store.buyModalSwitch(item._id)}
                    >
                      Acheter
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Modal
        open={store.marketModal}
        onClose={store.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
      >
        <Box
          sx={style}
          className="p-4 shadow-md bg-white dark:bg-slate-900 rounded flex flex-col laptop:flex-row w-5/6 tablet:w-3/4 laptop:w-10/12 desktop:w-8/12 justify-between "
        >
          {store.buyModal ? <AcheterModal /> : <ShowProductModal />}
        </Box>
      </Modal>
      <Pagination
        color="warning"
        onChange={store.handleChange}
        size="large"
        count={store.pageCount}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}
