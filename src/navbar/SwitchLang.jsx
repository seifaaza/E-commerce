import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import LanguageIcon from "@mui/icons-material/Language";
import mainStore from "../store/MainStore";

export default function SwitchLang() {
  const store = mainStore();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
    <div>
      <div
        className="cursor-pointer text-lg laptop:w-10 flex items-center gap-1 hover:text-orange-400"
        ref={anchorRef}
        aria-controls={open ? "split-button-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="menu"
        onClick={handleToggle}
      >
        <LanguageIcon />
        <span className=" hidden laptop:block">
          {store.choosenLang.charAt(0).toUpperCase() +
            store.choosenLang.slice(1)}
        </span>
        <span className="laptop:hidden">
          {(() => {
            switch (store.choosenLang) {
              case "fr":
                return "Français";
              case "en":
                return "Anglais";
              case "ar":
                return "Arabe";
              default:
                return null;
            }
          })()}
        </span>
      </div>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className="dark:bg-black dark:text-white"
                  id="split-button-menu"
                >
                  {store.languages.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === store.selectedLang}
                      // onClick={(event) => handleMenuItemClick(event, index)}
                      onClick={(event) =>
                        store.handleLangSwitch(event, index) + setOpen(false)
                      }
                    >
                      {(() => {
                        switch (option) {
                          case "fr":
                            return "Français";
                          case "en":
                            return "Anglais";
                          case "ar":
                            return "Arabe";
                          default:
                            return null;
                        }
                      })()}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
