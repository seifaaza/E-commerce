import { useState } from "react";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

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

  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const outerTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });

  return (
    <form className="flex flex-col laptop:flex-row laptop:gap-2 w-full text-slate-700 dark:text-slate-400 ">
      <div className="box w-full laptop:w-6/12 desktop:w-5/12">
        <Carousel useKeyboardArrows={true}>
          {store.product.images &&
            store.product.images.map((el, index) => {
              return (
                <div key={index} className="slide ">
                  {/* <div
                    className="w-full h-96 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(https://srv2.aptusmaroc.com/${el.link})`,
                      maxHeight: "450px",
                    }}
                  ></div> */}
                  <img
                    style={{ maxHeight: "430px" }}
                    src={`https://srv2.aptusmaroc.com/${el.link}`}
                    className="w-auto object-cover"
                  />
                </div>
              );
            })}
        </Carousel>
      </div>

      <div className=" p-2 laptop:p-5 flex flex-col justify-between w-full laptop:w-2/4 font-main gap-5">
        {store.acheter ? (
          <div className="flex flex-col justify-between w-full  font-main">
            <IconButton
              aria-label="Retour"
              className="w-fit"
              color="warning"
              onClick={store.acheterToggle}
            >
              <ArrowBackIcon />
            </IconButton>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4"></div>
            </div>

            <List className="text-xl dark:text-white flex flex-col tablet:gap-3">
              <ListItem>
                <p>
                  Produit :{" "}
                  <span className="font-medium "> {store.product.name}</span>
                </p>
              </ListItem>

              <ListItem>
                <p>
                  Prix :{" "}
                  <span className="font-medium ">
                    {" "}
                    {store.product.price} MAD{" "}
                  </span>
                </p>
              </ListItem>

              <ListItem>
                <span className="flex gap-4">
                  <h1>Quantité : {store.quantity}</h1>
                  <ButtonGroup color="warning">
                    <Button aria-label="reduce" onClick={store.reduceQuantity}>
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      aria-label="increase"
                      onClick={store.increaseQuantity}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </span>
              </ListItem>

              <ListItem>
                <h1>Totale : {store.quantity * store.product.price} MAD</h1>
              </ListItem>
            </List>
          </div>
        ) : (
          <Box>
            <ThemeProvider theme={outerTheme}>
              <TabContext value={value}>
                <Box className="pb-5 laptop:pb-8 ">
                  <TabList className="font-main" onChange={handleChange}>
                    <Tab label="Général" value="1" />
                    <Tab label="Caractéristiques" value="2" />
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
                    <Table
                      aria-label="caption table"
                      className="dark:bg-slate-900"
                    >
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
            </ThemeProvider>
          </Box>
        )}
        <div className="flex flex-col tablet:flex-row justify-center gap-4 pt-3">
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
            onClick={!store.acheter ? store.acheterToggle : null}
          >
            {store.acheter ? "Finaliser ma commande" : "Acheter"}
          </Button>
        </div>
      </div>
    </form>
  );
}
