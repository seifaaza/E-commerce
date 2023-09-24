import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import productStore from "../../../store/ProductStore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function createData(Longueur, Largeur, Hauteur) {
  return { Longueur, Largeur, Hauteur };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

export default function DeleteModel() {
  const store = productStore();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <form className="flex flex-col gap-2 w-full text-slate-700 dark:text-slate-400 ">
      <div
        style={{
          backgroundImage: `url(https://srv2.aptusmaroc.com/${
            store.product.images ? store.product.images[0].link : "null"
          })`,
        }}
        className={`h-60 tablet:h-80 rounded bg-cover bg-no-repeat bg-center `}
      ></div>
      <div className="p-2 tablet:p-5 flex flex-col justify-between w-full font-main gap-5">
        <Box>
          <TabContext value={value}>
            <Box className="pb-3">
              <TabList
                textColor="secondary"
                indicatorColor="secondary"
                onChange={handleChange}
              >
                <Tab label="Général" value="1" />
                <Tab label="Caractéristiques" value="2" className="font-main" />
              </TabList>
            </Box>
            <TabPanel
              value="1"
              sx={{ maxHeight: "8rem" }}
              className="flex flex-col gap-2 overflow-y-scroll"
            >
              {" "}
              <div className="flex justify-between ">
                <h3 className="font-main text-medium dark:text-white">
                  {store.product.name}
                </h3>
                <p className=" font-medium dark:text-orange-500">
                  {store.product.price} MAD
                </p>
              </div>
              <h2 className="text-small-heading">
                Marque : {store.product.brand}
              </h2>
              <p>{store.product.short_description}</p>
            </TabPanel>
            <TabPanel
              value="2"
              sx={{ maxHeight: "6rem" }}
              className="flex flex-col gap-2 overflow-y-scroll"
            >
              {" "}
              <TableContainer>
                <Table aria-label="caption table" className="dark:bg-slate-900">
                  <TableHead>
                    <TableRow>
                      <TableCell className="font-main dark:text-white">
                        Longueur (mm)
                      </TableCell>
                      <TableCell className="font-main dark:text-white">
                        Largeur (mm)
                      </TableCell>
                      <TableCell className="font-main dark:text-white">
                        Hauteur (mm)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-main dark:text-slate-300">
                          {row.Longueur}
                        </TableCell>
                        <TableCell className="font-main dark:text-slate-300">
                          {row.Largeur}
                        </TableCell>
                        <TableCell className="font-main dark:text-slate-300">
                          {row.Hauteur}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabContext>
        </Box>
        <div className="flex flex-col tablet:flex-row justify-center gap-4 pt-3">
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
