import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, NavLink } from "react-router-dom";
import mainStore from "../store/MainStore";
import Test from "./Test";

const MenuItems = ({ items }) => {
  const store = mainStore();
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

  return (
    <li
      className=" px-2 py-1 flex flex-col "
      ref={ref}
      onClick={() => setDropdown(!dropdown)}
    >
      {!items.url && items.submenu ? (
        // <>
        //   <button
        //     className="hover:text-orange-500 "
        //     type="button"
        //     aria-haspopup="menu"
        //     aria-expanded={dropdown ? "true" : "false"}
        //     // onClick={() => setDropdown(!dropdown)}
        //   >
        //     <Link to={items.url}>
        //       {items.title}
        //       <KeyboardArrowDownIcon
        //         style={{ transition: "200ms" }}
        //         className={` ${dropdown ? "rotate-180" : null} `}
        //       />
        //     </Link>
        //   </button>
        //   <Dropdown submenus={items.submenu} dropdown={dropdown} />
        // </>
        <div className="flex hover:text-orange-400 ">
          <Test />
          <KeyboardArrowDownIcon
            style={{ transition: "200ms" }}
            className={` ${dropdown ? "rotate-180" : null} `}
          />
        </div>
      ) : items.url && items.submenu ? (
        <>
          <button
            className="hover:text-orange-400"
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
          onClick={() => {
            store.handleNavOpen(false);
          }}
        >
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

MenuItems.propTypes = {
  items: PropTypes.object,
  url: PropTypes.string,
  submenu: PropTypes.string,
};

export default MenuItems;
