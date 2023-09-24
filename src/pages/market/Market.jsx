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

export default function Market() {
  const store = productStore();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    maxHeight: "90%",
    minHeight: "fit-content",
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
    <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-12 laptop:px-0 ">
      <div className="flex flex-col-reverse gap-3 tablet:flex-row justify-between w-full">
        <MarketFilter />
        <SearchBar />
      </div>
      <div
        style={{
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 280px) )",
        }}
        className="grid grid-cols-4 justify-start gap-8 w-full"
      >
        {" "}
        {store.searchedProducts &&
          store.searchedProducts.map((item, index) => {
            return (
              <div
                key={index}
                className="h-96 flex flex-col justify-between gap-3 bg-white dark:bg-dark rounded p-2 max-w-sm cursor-pointer hover:scale-105 duration-300 hover:shadow-sm"
                // onClick={store.handleOpen}
                onClick={() => store.fetchProduct(item._id)}
              >
                <div
                  style={{
                    backgroundImage: `url(https://srv2.aptusmaroc.com/${
                      item.images ? item.images[0].link : "null"
                    })`,
                  }}
                  className={`h-52 rounded  bg-cover bg-no-repeat bg-center `}
                ></div>
                <div className="flex flex-col gap-4 justify-between dark:text-slate-100 p-2 ">
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
      >
        <Box
          sx={style}
          className="p-5 shadow-md rounded flex flex-col laptop:flex-row w-5/6 tablet:w-3/4 laptop:w-2/4  justify-between dark:bg-slate-900 "
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
