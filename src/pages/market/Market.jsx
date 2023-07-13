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
import Pagination from "@mui/material/Pagination";
import productStore from "../../store/ProductStore";

export default function Market() {
  const store = productStore();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: 4,
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
        {store.searchedProducts &&
          store.searchedProducts.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="h-96 flex flex-col justify-between gap-3 bg-white dark:bg-dark rounded p-2 max-w-sm cursor-pointer hover:scale-105 duration-300 hover:shadow-sm"
                  onClick={handleOpen}
                >
                  <div
                    style={{
                      backgroundImage: `url(https://srv2.aptusmaroc.com/${item.images[0].link})`,
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
                      <IconButton
                        aria-label="Save"
                        size="large"
                        onClick={() => store.handleSaved(item._id)}
                      >
                        {store.savedItemId.includes(item._id) ? (
                          <BookmarkIcon fontSize="inherit" color="warning" />
                        ) : (
                          <BookmarkBorderIcon
                            fontSize="inherit"
                            color="warning"
                          />
                        )}
                      </IconButton>
                      <Button
                        component={Link}
                        to=""
                        variant="contained"
                        className="btn btn-contained"
                        endIcon={<ShoppingCartIcon />}
                      >
                        Acheter
                      </Button>
                    </div>

                    {/* <IconButton
                      component={Link}
                      to="/confirmer"
                      className="self-end"
                    >
                      <ShoppingCartIcon color="warning" />
                    </IconButton> */}
                  </div>
                </div>

                {/* <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={style}
                    className="shadow-md rounded flex flex-col laptop:flex-row w-5/6 tablet:w-2/4 h-fit justify-between"
                  >
                    <div
                      className={`h-64 w-2/4 rounded  bg-contain bg-no-repeat bg-center bg-[url('https://srv2.aptusmaroc.com/media/images/product/topview-wh-tf-web-big_1687792057.jpeg')]`}
                    ></div>
                    {addItem === false ? (
                      <div className="flex flex-col justify-between w-full laptop:w-3/4 font-main">
                        <div className="flex justify-between ">
                          <div className="flex flex-col gap-2">
                            <h3 className="font-main text-medium">
                              {item.name}
                            </h3>
                            <h2 className="text-small-heading">
                              {item.price} MAD
                            </h2>
                          </div>
                          <div className="flex gap-1 ">
                            <p className="dark:text-white">{item.brand}</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5">
                          <p>{item.short_description}</p>
                          <div className="flex flex-col laptop:flex-row gap-3">
                            <Button
                              variant="outlined"
                              className="btn btn-outlined w-fit"
                              endIcon={<ShoppingBagIcon />}
                            >
                              Ajouter au panier
                            </Button>
                            <Button
                              variant="contained"
                              className="btn btn-contained w-fit"
                              endIcon={<ShoppingCartIcon />}
                              onClick={() => setAddItem("yes")}
                            >
                              Acheter
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-between w-full laptop:w-3/4  font-main">
                        <div className="flex justify-between">
                          <div className="flex flex-col gap-2">
                            <h3 className="font-main text-medium">
                              {item.name}
                            </h3>
                            <h2 className="text-small-heading">
                              {item.price} MAD /1
                            </h2>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5">
                          <div className="flex gap-10">
                            <TextField
                              color="warning"
                              type="number"
                              id="outlined-basic"
                              label="Quantité"
                              variant="outlined"
                              value={quantite}
                              onChange={totale}
                            />

                            <div>
                              <h1>Totale :</h1>{" "}
                              <p className="text-xl font-medium">
                                {quantite * item.price} MAD
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col laptop:flex-row gap-3">
                            <Button
                              variant="outlined"
                              className="btn btn-outlined w-fit"
                              endIcon={<ShoppingBagIcon />}
                            >
                              Ajouter au panier
                            </Button>
                            <Button
                              to="/confirmer"
                              component={Link}
                              variant="contained"
                              className="btn btn-contained w-fit"
                              endIcon={<ArrowForwardIcon />}
                              onClick={() => setAddItem("yes")}
                            >
                              Confirmer
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Box>
                </Modal> */}
              </>
            );
          })}
      </div>
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
