import React from "react";
import NosClientsItem from "./NosClientsItem";
import NosClientsData from "./NosClientsData";

export default function NosClients() {
  const NosClientsItems = () => {
    return NosClientsData.map((item, index) => {
      return <NosClientsItem logo={item.logo} />;
    });
  };
  return (
    <div className="flex flex-col gap-6" >
      {/* <h1 className="font-main text-slate-700 text-small-heading text-center">Approuvé par de nombreuses sociétés </h1> */}
      <div className="slider after:bg-gradient-to-r after:from-white dark:after:from-dark after:to-transparent before:bg-gradient-to-r before:from-white dark:before:from-dark before:to-transparent h-fit w-full overflow-hidden relative dark:bg-dark">
        <div className="slide-track flex justify-between">
          <NosClientsItems />
        </div>
      </div>
    </div>
  );
}
