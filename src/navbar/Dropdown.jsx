import React from "react";
import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`bg-white dark:bg-slate-950 flex flex-col items-center laptop:items-start dropdown ${dropdown ? "show transition duration-200" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
