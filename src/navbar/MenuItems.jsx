import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import Dropdown from "./Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, NavLink } from "react-router-dom";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className="relative px-2 py-1 flex flex-col "
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!items.url && items.submenu ? (
        <>
          <button
            className="hover:text-orange-500"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown(!dropdown)}
          >
            <Link to={items.url}>
              {items.title}
              <KeyboardArrowDownIcon
                style={{ transition: "200ms" }}
                className={` ${dropdown ? "rotate-180" : null} `}
              />
            </Link>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : items.url && items.submenu ? (
        <>
          <button
            className="hover:text-orange-500"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <NavLink to={items.url}>
              {items.title}
              <KeyboardArrowDownIcon
                style={{ transition: "200ms" }}
                className={` ${dropdown ? "rotate-180" : null} `}
              />
            </NavLink>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink
          className="relative btn-hover btn-underline w-fit"
          to={items.url}
        >
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

MenuItems.propTypes = {
  items: PropTypes.string,
  url: PropTypes.string,
  submenu: PropTypes.string,
};


export default MenuItems;
