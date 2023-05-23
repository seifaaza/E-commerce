import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import ErrorAnimation from "./error-404.json";
// import Lottie from "lottie-react";

export default function Error() {
  return (
    <div className=" flex flex-col justify-center items-center">
      {/* <Lottie animationData={ErrorAnimation} loop={true} autoPlay/> */}
      <img src="/assets/svg/error-404.svg" className="w-10/12 tablet:w-8/12 laptop:w-5/12 desktop:w-6/12"/>
      <div className="flex flex-col items-center gap-3">
        <p className="font-main text-center text-slate-700 text-small-heading max-w-lg tablet:text-lg dark:text-slate-300">
          Désolé, La page que vous recherchez semble introuvable
        </p>
        <Button variant="contained" className="btn btn-contained w-fit">
          <Link to="/">Retour à l&apos;acceuil</Link>
        </Button>
      </div>
    </div>
  );
}
