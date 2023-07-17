import { useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import productStore from "../../../store/ProductStore";

export default function DeleteModel() {
  const store = productStore();
  return (
    <form className="flex flex-col gap-5 w-full text-slate-700 dark:text-slate-400 ">
      <IconButton
        aria-label="Retour"
        className="w-fit"
        color="warning"
        onClick={store.showModalSwitch}
      >
        <ArrowBackIcon />
      </IconButton>

      <div className="flex flex-col justify-between w-full laptop:w-3/4  font-main">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-main text-medium">name</h3>
            <h2 className="text-small-heading">200 MAD /1</h2>
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
            />

            <div>
              <h1>Totale :</h1> <p className="text-xl font-medium">200 MAD</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              size="large"
              component={Link}
              to=""
              variant="outlined"
              className="btn btn-outlined"
              endIcon={<ShoppingCartIcon />}
            >
              Ajouter au panier
            </Button>
            <Button
              size="large"
              component={Link}
              to=""
              variant="contained"
              className="btn btn-contained"
              endIcon={<ArrowForwardIcon />}
            >
              Finaliser ma commande
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
