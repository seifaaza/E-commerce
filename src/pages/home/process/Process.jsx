import React from "react";
import ProcessItem from "./ProcessItem";
import ProcessData from "./ProcessData";

export default function Process() {
  const ProcessItems = () => {
    return ProcessData.map((item, index) => {
      return (
        <>
          <ProcessItem
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
            arrow={item.arrow}
            delay={index * 100}
          />
        </>
      );
    });
  };

  return (
    <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-8 laptop:px-0 ">
      <h1 className="h-fit text-title text-center tablet:text-large bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 laptop:mb-5">
        Comment ça <span className="whitespace-nowrap">marche ?</span>
      </h1>
      <div className="flex flex-col laptop:flex-row justify-center gap-10 tablet:text-center laptop:w-full laptop:gap-8 laptop:justify-between">
        <ProcessItems />
      </div>
    </div>
  );
}
