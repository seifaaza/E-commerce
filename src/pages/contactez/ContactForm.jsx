
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-3 w-full ">
      <TextField
        color="warning"
        id="outlined-textarea"
        label="Nom et Prénom"
        placeholder="Saisissez votre adresse nom et prénom"
      />
      <TextField
        color="warning"
        id="outlined-textarea"
        label="
        Téléphone "
        placeholder="Saisissez votre numéro de 
        téléphone "
      />
      <TextField
        color="warning"
        id="outlined-textarea"
        label="Sujet du message"
        placeholder="Saisissez le sujet de votre message
         "
      />
      <TextField
        color="warning"
        id="outlined-multiline-static"
        label="Contenu du message"
        placeholder="Saisissez le contenu de votre message"
        multiline
        rows={4}
      />

      {/* <Stack spacing={2}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={topic.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              color="warning"
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack> */}
      <Button
        variant="contained"
        endIcon={<MailOutlineIcon />}
        className="btn btn-contained w-full max-w-sm self-center tablet:self-start tablet:w-fit"
      >
        Envoyez
      </Button>
    </div>
  );
};
// const topic = [
//   {
//     title: "Panneaux solaires",
//   },
//   {
//     title: "Électroménager",
//   },
//   {
//     title: "Climatisation",
//   },
//   {
//     title: "Plomberie",
//   },
//   {
//     title: "Électricité",
//   },
//   {
//     title: "Autre",
//   },
// ];
export default ContactForm;
