import React, { useState } from "react";
import { TextField } from "@mui/material";

const IdentifiezVous = () => {

  const [formData, setFormData] = useState({
    nomEtPrenom: "",
    tel: "",
    email: "",
    motDePasse: "",
  });
  return (
    <>
      <TextField
        color="warning"
        id="outlined-textarea"
        label="Nom et prénom"
        placeholder="Saisissez votre adresse e-mail"
        className="w-full max-w-md"
        value={formData.nomEtPrenom}
        onChange={(e) => setFormData({ ...formData, nomEtPrenom: e.target.value })}
      />
      <TextField
        color="warning"
        id="outlined-textarea"
        label="Tél"
        placeholder="Saisissez votre numéro de téléphone"
        className="w-full max-w-md"
        value={formData.tel}
        onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
      />
      <TextField
        color="warning"
        id="outlined-textarea"
        label="E-mail"
        placeholder="Saisissez votre adresse e-mail"
        className="w-full max-w-md"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <TextField
        color="warning"
        id="outlined-textarea"
        label="Mot de passe"
        placeholder="Saisissez votre mot de passe"
        className="w-full max-w-md"
        value={formData.motDePasse}
        onChange={(e) => setFormData({ ...formData, motDePasse: e.target.value })}
      />
      <button>Next</button>
    </>
  );
};

export default IdentifiezVous;
