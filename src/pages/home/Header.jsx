import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function Header() {
  return (
    <div className="header-bg relative">
      <div
        className="relative pt-16 after:absolute after:w-full after:h-full after:bg-gradient-to-tr 
      after:from-white dark:after:from-dark after:to-transparent after:top-0 
      backdrop-grayscale dark:backdrop-brightness-50 dark:backdrop-contrast-200 backdrop-opacity-80 "
      >
        <div
          className=" py-10 main-container bg-blend-overlay h-full w-full px-3 flex flex-col 
        tablet:flex-row justify-between items-center gap-10 laptop:gap-28 laptop:px-8 tablet:pt-24 laptop:py-20"
        >
          <div
            className="z-10 heading text-center items-center tablet:pl-10 laptop:pl-0 tablet:max-w-lg laptop:max-w-2xl desktop:max-w-4xl 
          tablet:items-start tablet:text-start font-main text-slate-900 flex flex-col gap-4"
          >
            <div className="heading-text">
              <div className="heading-title mb-4 grid ">
                <h1 className="text-5xl tablet:text-6xl laptop:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                  Avec
                </h1>
                <h1 className="sec-word leading-snug text-5xl tablet:text-6xl laptop:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                  <span>Q</span>
                  <span>u</span>
                  <span>i</span>
                  <span>c</span>
                  <span>k</span>
                  <span> </span>
                  <span>B</span>
                  <span>r</span>
                  <span>i</span>
                  <span>c</span>
                  <span>o</span>
                  <span>l</span>
                  <span>a</span>
                  <span>g</span>
                  <span>e</span>
                </h1>
                <h1 className="text-7xl flex justify-center tablet:justify-start gap-3 laptop:gap-4">
                  <span className="storke">bali</span>
                  <span className=" bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500  ">
                    hani
                  </span>
                  <span className="storke">!</span>
                </h1>
              </div>
              <div className="header-des">
                <h2 className="laptop:mt-5 max-w-lg text-2xl dark:text-slate-100">
                  Une urgence à la maison, on s&apos;en occupe.
                </h2>
                <p className="laptop:mt-2 text-small-heading max-w-lg tablet:text-lg dark:text-slate-100">
                  Votre temps et votre sérénité sont inestimables. Libérez-vous
                  pour l&apos;essentiel de votre vie et confiez-nous vos besoins
                  de réparation à domicile.
                </p>
              </div>
            </div>
            {/* <main>Quick Bricolage</main> */}
            <div className="header-buttons flex flex-col tablet:flex-row max-w-md tablet:max-w-none mt-2 justify-center gap-4 tablet:gap-4 tablet:justify-start laptop:mt-4 whitespace-nowrap">
              <Button
                size="large"
                component={Link}
                to=""
                variant="outlined"
                className="btn btn-outlined"
                endIcon={<ConstructionIcon />}
              >
                Devenir Pro
              </Button>
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
            </div>
          </div>
        </div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7190.46 565.62"
          className="fill-white dark:fill-dark"
        >
          <defs></defs>
          <path
            className="cls-1"
            d="M.46,338C448.39,184.4,1121.68,8.6,1941.46,15c790.7,6.17,1295.43,178.55,1769,277,772.58,160.6,1917,219,3480-292L7190,565.62H0"
          />
        </svg>
        <img
          className="absolute -bottom-2 tablet:bottom-5 laptop:w-28 right-2/4 z-10 w-20 rotate-6"
          src="/public/assets/shapes/shape-2.svg"
          alt=""
        />
      </div>
    </div>
  );
}
