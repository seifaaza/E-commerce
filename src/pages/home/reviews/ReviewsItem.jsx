import React from "react";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";


const ReviewsItem = (props) => {
  
  return (
    <div
      className="flex flex-col gap-3 p-4 bg-orange-opacity text-slate-700 rounded tablet:max-w-lg tablet:p-5"
      data-aos="zoom-out"
      data-aos-delay={props.delay}
    >
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Avatar alt={props.name} src={`/assets/images/${props.photo}`} />
          <div className="flex flex-col">
            <h3 className="font-medium text-lg dark:text-white">
              {props.name}
            </h3>
            <p className="text-slate-500 text-sm dark:text-slate-400">{props.city}</p>
          </div>
        </div>
        <div className="flex gap-1 ">
          <StarIcon className="text-amber-500" />
          <p className="dark:text-white">{props.rating}</p>
        </div>
      </div>
      <p className="text-small dark:text-slate-300">{props.review}</p>
    </div>
  );
};

export default ReviewsItem;
