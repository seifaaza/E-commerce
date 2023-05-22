import IdentifiezVous from "./IdentifiezVous";
import Paiment from "./Paiment";
import Detail from "./Detail";

const FormSteps = [
  { step: "Identifiez-vous", form: <IdentifiezVous /> },
  { step: "Détail de l’intervention", form: <Detail /> },
  { step: "Sélectionnez le mode de paiement", form: <Paiment /> },
];
export default FormSteps;
