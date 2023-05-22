import React from "react";

const NosClientsItems = (props) => {
  return (
    <div className="w-60 h-16 ">
      <img src={`${props.logo}.png`} className="h-full grayscale brightness-125"  alt="" />
    </div>
  );
};

export default NosClientsItems;
