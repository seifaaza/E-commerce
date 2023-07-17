import { useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import productStore from "../../../store/ProductStore";

export default function DeleteModel() {
  const store = productStore();
  return (
    <form className="flex flex-col gap-2 w-full text-slate-700 dark:text-slate-400 ">
      <div
        style={{
          backgroundImage: `url(https://srv2.aptusmaroc.com/media/images/product/topview-wh-tf-web-big_1687792057.jpeg)`,
        }}
        className={`h-96 rounded bg-cover bg-no-repeat bg-center `}
      ></div>
      <div className="p-5 flex flex-col justify-between w-full font-main">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2">
            <h3 className="font-main text-medium">name</h3>
            <h2 className="text-small-heading"></h2>
          </div>
          <div className="flex gap-1 ">
            <p className="dark:text-white">price MAD</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p>short_description</p>
        </div>
        <table>
          <tr>
            <thead>t</thead>
          </tr>
        </table>
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
            onClick={() => store.buyModalSwitch(1)}
          >
            Acheter maintenant
          </Button>
        </div>
      </div>
    </form>
  );
}
