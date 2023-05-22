import React from "react";
import MarketData from "./MarketData";
import MarketItem from "./MarketItem";

export default function Market() {
  const MarketItems = () => {
    return MarketData.map((item, index) => {
      return (
        <MarketItem
          key={index}
          title={item.title}
          image={item.image}
          price={item.price}
          des={item.des}
          mark={item.mark}
        />
      );
    });
  };

  return (
    <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-12 laptop:px-0 h-screen">
      <div className="grid grid-cols-4 justify-start gap-5 w-full">
        <MarketItems />
      </div>
    </div>
  );
}
