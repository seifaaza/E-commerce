import React from "react";
import ProcessStepper from "./ProcessStepper";

export default function Confirmer() {
  return (
    <div className="flex flex-col gap-6 tablet:gap-10 z-10 tablet:pt-8">
      <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-10 laptop:px-0 ">
        <h1 className="h-fit text-title text-center tablet:text-large bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 ">
          Confirmer l'intervention
        </h1>
        <ProcessStepper/>
      </div>
    </div>
  );
}
