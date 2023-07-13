import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpeedIcon from "@mui/icons-material/Speed";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="py-10 px-3 flex flex-col tablet:flex-row justify-between items-center gap-10 laptop:gap-28 laptop:px-8 tablet:pt-24">
      <div className="heading text-center items-center tablet:items-start tablet:text-start font-main text-slate-700 flex flex-col gap-4">
        <h1 className="text-large tablet:text-large bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 whitespace-nowrap laptop:mb-5">
          Bali hani !
        </h1>
        <h2 className="text-medium text-slate-700 dark:text-white">
          Satisfait ou refait
        </h2>
        <p className="text-small-heading max-w-lg tablet:text-lg dark:text-slate-300">
          Plateforme en ligne facile à utiliser, qui vous permet d&apos;accéder
          à nos produits et services de dépannage et petits travaux en quelques
          cliques{" "}
        </p>
        <div className="flex flex-row max-w-md tablet:max-w-none mt-2 justify-center gap-4 tablet:gap-4 tablet:justify-start laptop:mt-4 whitespace-nowrap">
          <Button
            size="large"
            component={Link}
            to=""
            variant="contained"
            className="btn btn-contained"
            endIcon={<ArrowForwardIcon />}
          >
            Demander un service
          </Button>
          {/* <Button
            size="large"
            component={Link}
            to=""
            variant="outlined"
            className="btn btn-outlined"
            endIcon={<SpeedIcon />}
          >
            Diagnostic
          </Button> */}
        </div>
      </div>
      <img src="/assets/images/design.png" alt="" className="image-size" />
    </div>
  );
}
