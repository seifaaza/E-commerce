import React, { useState } from "react";
import RaisonsData from "./RaisonsData";
import RaisonsItem from "./RaisonsItem";

export default function Raisons() {
  const [length, setLength] = useState(0);
  const RaisonItems = () => {
    return RaisonsData.map((item, index) => {
      setLength(index +1)
      return (
        <RaisonsItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.content}
          delay={index * 100}
        />
      );
    });
  };
  return (
    <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-8 laptop:px-0 ">
      <h1 className="h-fit text-title text-center tablet:text-large bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 laptop:mb-5">
       {length} Raisons de choisir Quick Bricolage
      </h1>
      <div className="flex flex-wrap justify-center gap-8 tablet:text-center laptop:w-full laptop:justify-between ">
        <RaisonItems />
      </div>
    </div>
  );
}
