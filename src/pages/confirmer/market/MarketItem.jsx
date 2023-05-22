import React from "react";

export default function MarketItem(props) {
  return (
    <div className="flex flex-col bg-white rounded p-4 max-w-sm">
      <img
        // src={`/assets/images/${props.image}`}
        alt={` ${props.title}`}
        className="h-16"
      />
      {/* <div className="bg-[url('/assets/images/sara.jpg')]"></div> */}
      <div>
        <h1>{props.price} MAD</h1>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
      </div>
    </div>
  );
}
