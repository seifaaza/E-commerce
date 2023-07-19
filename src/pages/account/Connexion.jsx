import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

export default function Connexion() {
  const [signSwitch, setSignSwitch] = useState("");
  const SignSwitch = (SignEvent) => {
    setSignSwitch(SignEvent);
  };

  return (
    <div className="flex flex-col gap-6 tablet:gap-10 z-10 tablet:pt-8">
      <div className="font-main py-10 laptop:py-20 px-3 flex flex-col laptop:flex-row  gap-10 laptop:gap-32 tablet:px-8  laptop:px-20 ">
        <div className="flex flex-col gap-3 h-fit text-slate-700 text-center laptop:text-start w-full "></div>
        {signSwitch === "signUp" ? (
          <SignUp SignSwitch={SignSwitch} />
        ) : signSwitch === "login" || signSwitch === "" ? (
          <Login SignSwitch={SignSwitch} />
        ) : null}
      </div>
    </div>
  );
}
