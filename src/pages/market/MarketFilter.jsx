import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function MarketFilter() {
  return (
    <ButtonGroup
      variant="outlined"
      className="btn inline-block overflow-scroll"
      color="warning"
      aria-label="outlined primary button group"
    >
      <Button className="btn-outlined">Cuisine</Button>
      <Button className="btn-outlined">Salle de bain</Button>
      <Button className="btn-outlined">Chauffe-eau</Button>
      <Button className="btn-outlined">Climatisation</Button>
      <Button className="btn-outlined">Filtre eau</Button>
      <Button className="btn-outlined">Jardin</Button>
      <Button className="btn-outlined">Piscine</Button>
      <Button className="btn-outlined">Outillage</Button>
      <Button className="btn-outlined">Luminaire</Button>
      <Button className="btn-outlined">Electricité</Button>
      <Button className="btn-outlined">Décoration</Button>
      <Button className="btn-outlined">Quincaillerie</Button>
      <Button className="btn-outlined">Peinture</Button>
    </ButtonGroup>
  );
}
