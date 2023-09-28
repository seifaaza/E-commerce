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
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    <form className="flex flex-col laptop:flex-row laptop:gap-2 w-full text-slate-700 dark:text-slate-400 ">
      <div className="box w-full laptop:w-6/12 desktop:w-5/12">
        <Carousel useKeyboardArrows={true}>
          {store.product.images &&
            store.product.images.map((el, index) => {
              return (
                <div key={index} className="slide ">
                  <img
                    src={`https://srv2.aptusmaroc.com/${el.link}`}
                    className="rounded"
                  />
                </div>
              );
            })}
        </Carousel>
      </div>

      <div className=" p-2 laptop:p-5 flex flex-col justify-between w-full laptop:w-2/4 font-main gap-5">
        <Box>
          <TabContext value={value}>
            <Box className="pb-5 laptop:pb-8">
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
              className="justify-start flex flex-col gap-2 laptop:gap-3 max-h-32 laptop:max-h-80 desktop:max-h-full overflow-y-scroll"
            >
              {" "}
              <div className="flex flex-col-reverse justify-between tablet:flex-row ">
                <h3 className="laptop:mt-2 font-medium text-small-heading laptop:text-medium dark:text-white">
                  {store.product.name}
                </h3>
                <p className=" font-medium text-2xl mb-2 tablet:text-3xl text-orange-500">
                  {store.product.price} MAD
                </p>
              </div>
              <h2 className="text-small-heading">
                Marque : {store.product.brand}
              </h2>
              <p>{store.product.description}</p>
            </TabPanel>
            <TabPanel
              value="2"
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
        <div className=" flex flex-col tablet:flex-row  justify-center gap-4 pt-3">
          <Button
            size="large"
            component={Link}
            to=""
            variant="outlined"
            className="btn btn-outlined"
            endIcon={<ShoppingCartIcon />}
          >
            Ajouter
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
            Acheter
          </Button>
        </div>
      </div>
    </form>
  );
}
