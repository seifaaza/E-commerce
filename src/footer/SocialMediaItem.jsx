import React from "react";
import { Link } from "react-router-dom";

const SocialMediaItem = (props) => {
  return (
    <Link className="hover:text-orange-500 " to={props.url} target={"_blank"}>
      {props.icon}
    </Link>
  );
};

export default SocialMediaItem;
