import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

// const options = [
//   "Create a merge commit",
//   "Squash and merge",
//   "Rebase and merge",
// ];
const options = [
  {
    title: "Plomberie",
    url: "/plomberie",
    icon: "plomberie2",
  },
  {
    title: "Électricité",
    url: "/électricité",
    icon: "électricité2",
  },
  {
    title: "Électroménager",
    url: "/électroménager",
    icon: "électroménager2",
  },
  {
    title: "Climatisation",
    url: "/climatisation",
    icon: "climatisation2",
  },
  {
    title: "Menuiserie bois",
    url: "/menuiserie-bois",
    icon: "menuiserie-bois2",
  },
  {
    title: "Petit Bricolage",
    url: "/petit-bricolage",
    icon: "petit-bricolage2",
  },
  {
    title: "Papier Peint",
    url: "/papier-peint",
    icon: "papier-peint2",
  },
  {
    title: "Peinture",
    url: "/peinture",
    icon: "peinture2",
  },
  {
    title: "Aluminium",
    url: "/aluminium",
    icon: "aluminium2",
  },
  {
    title: "Maçonnerie",
    url: "/maçonnerie",
    icon: "maçonnerie2",
  },
  {
    title: "Jardinage",
    url: "/jardinage",
    icon: "jardinage2",
  },
  {
    title: "Piscine",
    url: "/piscine",
    icon: "piscine2",
  },
  {
    title: "Hammam",
    url: "/hammam",
    icon: "hammam2",
  },
];
export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="relative cursor-pointer select-none" color="warning">
        <li
          ref={anchorRef}
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          Services
        </li>
      </div>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        className="services-dropdown"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            className="bg-black"
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <ul className="flex flex-wrap gap-4 dark:bg-black dark:text-white justify-center p-5">
                  {options.map((option, index) => (
                    <li
                      className="w-36 p-4 rounded-xl hover:opacity-70 hover:-translate-y-1 transition-all flex flex-col gap-2 justify-center items-center cursor-pointer "
                      key={option}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      <img
                        className="w-20"
                        src={`/public/assets/svg/${option.icon}.svg`}
                        alt=""
                      />
                      <span>{option.title}</span>
                    </li>
                  ))}
                </ul>
                {/* <MenuList
                  id="split-button-menu"
                  autoFocusItem
                  className="flex "
                >
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option.title}
                    </MenuItem>
                  ))}
                </MenuList> */}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
