import React from "react";

const MieuxItem = (props) => {
  return (
    <div className="flex gap-5 justify-center items-center p-4 bg-orange-opacity text-slate-700 rounded tablet:max-w-lg tablet:p-5"
    data-aos="zoom-in"
    data-aos-delay={props.delay}
    >
      <img
        alt={`Icon de ${props.icon}`}
        src={`/assets/svg/${props.icon}.svg`}
        className="w-16 h-fit tablet:w-20 laptop:w-24"
      />
      <p className="text-small text-slate-700 dark:text-slate-300 ">{props.content}</p>
    </div>
  );
};

export default MieuxItem;
