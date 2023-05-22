import React from "react";
import { TextField } from "@mui/material";

const paiement = () => {
    return (
      <>
        <TextField
          color="warning"
          id="outlined-textarea"
          label="Nom et prénom"
          placeholder="Saisissez votre adresse e-mail"
          className="w-full max-w-md"
        />
        <TextField
          color="warning"
          id="outlined-textarea"
          label="Tél"
          placeholder="Saisissez votre numéro de téléphone"
          className="w-full max-w-md"
        />
        <TextField
          color="warning"
          id="outlined-textarea"
          label="Tél"
          placeholder="Saisissez votre numéro de téléphone"
          className="w-full max-w-md"
        />
      </>
    );
  };

  export default paiement ;