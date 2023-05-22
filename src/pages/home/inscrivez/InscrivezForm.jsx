import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const InscrivezForm = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <TextField
        color="warning"
        id="outlined-textarea"
        label="E-mail"
        placeholder="Saisissez votre adresse e-mail"
      />{" "}
      <Button variant="contained" startIcon={<PersonAddIcon/>} className="btn btn-contained w-full max-w-sm self-center tablet:self-start tablet:w-fit">
        Je m’inscris
      </Button>
    </div>
  );
};

export default InscrivezForm;
