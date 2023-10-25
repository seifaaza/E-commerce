import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import ErrorAnimation from "./error-404.json";
// import Lottie from "lottie-react";

export default function Error() {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: "url('/assets/shapes/shape-5.svg')" }}
    >
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene">
            <p className="p404">404</p>
            <p className="p404">404</p>
          </div>
          <div className="error-article mt-32 tablet:mt-44 flex flex-col items-center gap-5">
            <p className="font-main text-center text-slate-700 text-small-heading max-w-lg tablet:text-lg dark:text-slate-300">
              Désolé, la page que vous recherchez est introuvable
            </p>
            <Button
              variant="contained"
              size="large"
              className="btn btn-contained w-fit"
            >
              <Link to="/">Retour à l&apos;Acceuil</Link>
            </Button>
          </div>{" "}
        </div>
      </section>
    </div>
  );
}
