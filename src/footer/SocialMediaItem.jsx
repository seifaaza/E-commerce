import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SocialMediaItem = (props) => {
  const {icon, url} = props;
  return (
    <Link className="hover:text-orange-500 " to={url} target={"_blank"}>
      {icon}
    </Link>
  );
};

SocialMediaItem.propTypes = {
  icon: PropTypes.string,
  url: PropTypes.string,
};

export default SocialMediaItem;
