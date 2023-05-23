import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

export default function MarketItem(props) {
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

  return (
    <>
      <div
        className="flex flex-col gap-3 bg-white rounded p-4 max-w-sm cursor-pointer hover:scale-105 duration-300 hover:shadow-sm"
        onClick={handleOpen}
      >
        <div
          className={`h-44 rounded  bg-contain bg-no-repeat bg-center bg-[url('/assets/images/produits/${props.image}')]`}
        ></div>
        <div className="flex justify-between ">
          <div>
            <h1>{props.title}</h1>
            <h3 className="font-semibold"> {props.price} MAD</h3>
          </div>

          <IconButton component={Link} to="/confirmer" className="self-end">
            <ShoppingCartIcon color="warning" />
          </IconButton>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="shadow-md rounded flex flex-col laptop:flex-row w-2/4 justify-between"
        >
          <div
            className={`h-64 w-full rounded  bg-contain bg-no-repeat bg-center bg-[url('/assets/images/produits/${props.image}')]`}
          ></div>
          <div className="flex flex-col justify-between font-main">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="font-main text-medium">{props.title}</h3>
                <h2 className="text-small-heading">{props.price} MAD</h2>
              </div>
              <div className="flex gap-1 ">
                <StarIcon className="text-amber-500" />
                <p className="dark:text-white">3.2</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p>{props.des}</p>
              <Button
                component={Link}
                to="/confirmer"
                variant="contained"
                className="btn btn-contained w-fit"
                endIcon={<ArrowForwardIcon />}
              >
                Confirmer
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
