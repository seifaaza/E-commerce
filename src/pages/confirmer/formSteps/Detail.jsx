import React from "react";
import { TextField } from "@mui/material";

const Detail = () => {
  return (
    <>
      <TextField
        color="warning"
        id="outlined-textarea"
        label="Nom et prénom"
        placeholder="Saisissez votre adresse e-mail"
        className="w-full max-w-md"
      />
    </>
  );
};

export default Detail;
