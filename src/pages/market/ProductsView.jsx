import IconButton from "@mui/material/IconButton";
import ViewListIcon from "@mui/icons-material/ViewList";
import WindowIcon from "@mui/icons-material/Window";
import { useState } from "react";
import mainStore from "../../store/MainStore";

export default function ProductsView() {
  const store = mainStore();

  return (
    <IconButton color="warning" size="large" onClick={store.changeProductsView}>
      {store.squareView ? (
        <WindowIcon fontSize="inherit" />
      ) : (
        <ViewListIcon fontSize="inherit" />
      )}
    </IconButton>
  );
}
