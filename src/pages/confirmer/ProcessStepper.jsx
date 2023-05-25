import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormSteps from "./formSteps/FormSteps";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeIcon from "@mui/icons-material/Home";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddCardIcon from "@mui/icons-material/AddCard";
import PaidIcon from "@mui/icons-material/Paid";
import { TextField } from "@mui/material";

export default function ProcessStepper() {
  // const [windowWidth, setWindowWidth] = useState(false);

  const [formData, setFormData] = useState({
    nomEtPrenom: "",
    tel: "",
    email: "",
    motDePasse: "",
    paiment1: "",
    paiment2: "",
    detail: "",
  });

  // window.addEventListener("resize", function () {
  //   window.innerWidth > 640 ? setWindowWidth(true) : setWindowWidth(false);
  // });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepButtons = () => {
    return (
      <div className="flex justify-center">
        {activeStep !== 0 ? (
          <Button
            onClick={handleBack}
            sx={{ mr: 1 }}
            variant="outlined"
            className="btn btn-outlined"
            startIcon={<ArrowBackIcon />}
          >
            Retour
          </Button>
        ) : null}

        <Button
          onClick={handleNext}
          variant="contained"
          className="btn btn-contained"
          endIcon={
            activeStep === FormSteps.length - 1 ? (
              <DoneIcon />
            ) : (
              <ArrowForwardIcon />
            )
          }
        >
          {activeStep === FormSteps.length - 1 ? "Confirmer" : "Suivant"}
        </Button>
      </div>
    );
  };

  const Backbutton = () => {
    return (
      <div className=" flex justify-center">
        <Button
          component={Link}
          to="/"
          onClick={handleReset}
          variant="contained"
          className="btn btn-contained"
          startIcon={<HomeIcon />}
        >
          Retour à l&apos;acceuil
        </Button>
      </div>
    );
  };

  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({  checked }) => ({
    ".MuiFormControlLabel-label":
      checked &&
      {
        // color: theme.palette.warning.main,
      },
  }));

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
  };
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <Stepper activeStep={activeStep} className="w-full mb-5">
        {FormSteps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>
                {" "}
                <h3 className="font-main font-normal text-small-heading text-slate-700 dark:text-slate-300">
                  {window.innerWidth > 640 ? label.step : ""}{" "}
                </h3>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 0 ? (
        <>
          <TextField
            color="warning"
            id="outlined-textarea"
            label="Nom et prénom"
            placeholder="Saisissez votre adresse e-mail"
            className="w-full max-w-md "
            value={formData.nomEtPrenom}
            onChange={(e) =>
              setFormData({ ...formData, nomEtPrenom: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            color="warning"
            id="outlined-textarea"
            label="Mot de passe"
            placeholder="Saisissez votre mot de passe"
            className="w-full max-w-md"
            value={formData.motDePasse}
            onChange={(e) =>
              setFormData({ ...formData, motDePasse: e.target.value })
            }
          />
          <StepButtons />
        </>
      ) : activeStep === 1 ? (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 justify-between">
            <h1 className="text-xl">Produit 1</h1>
            <div className="flex justify-between">
              <p>Quantité : 2 </p>
              <p>Totale : 420 MAD </p>
            </div>
          </div>
          <hr className="w-full border-slate-300 border-2 border-dashed" />
          <div className="flex flex-col gap-2 justify-between">
            <h1>Mr Mohamed amine</h1>
            <p>Adresse : Casablanca sidi maarouf rue 02 </p>
          </div>
          <StepButtons />
        </div>
      ) : activeStep === 2 ? (
        <>
          <RadioGroup name="use-radio-group" defaultValue="" className=" gap-5">
            <MyFormControlLabel
              value="first"
              label="Par carte"
              control={<AddCardIcon />}
              className="gap-3 bg-slate-100 p-6 px-8 rounded hover:text-orange-400"
            />
            <MyFormControlLabel
              value="second"
              label="Espèces"
              control={<PaidIcon />}
              className="gap-3 bg-slate-100 p-6 px-8 rounded hover:text-orange-400"
            />
          </RadioGroup>
          <StepButtons />
        </>
      ) : activeStep === 3 ? (
        <div className="flex flex-col justify-center items-center gap-5 font-normal text-center text-small-heading text-slate-700 dark:text-slate-300">
          <CheckCircleIcon sx={{ fontSize: "5rem" }} color="warning" />
          <h3>Votre commande a été prise en compte</h3>
          <p className="max-w-lg">
            Merci Mohamed Nous vous remercions de votre confiance. Votre numéro
            de votre commande est{" "}
            <span className="underline font-medium">34843</span>
          </p>

          <Backbutton />
        </div>
      ) : null}

      {/* {FormSteps.map((item, index) => {
        return (
          <>
            {activeStep === index ? (
              <div
                key={index}
                className="mt-5 flex flex-col justify-center items-center gap-5 font-main font-normal text-center text-small-heading text-slate-700 dark:text-slate-300"
              >
                <p className="text-title tablet:hidden">{item.step}</p>
                {item.form}
                <StepButtons />
              </div>
            ) : null}
          </>
        );
      })}
      {activeStep === FormSteps.length ? (
        <div className="flex flex-col justify-center items-center gap-5 font-normal text-center text-small-heading text-slate-700 dark:text-slate-300">
          <CheckCircleIcon sx={{ fontSize: "5rem" }} color="warning" />
          <h3>Votre commande a été prise en compte</h3>
          <p className="max-w-lg">
            Merci Seif Nous vous remercions de votre confiance. Votre numéro de
            votre commande est{" "}
            <span className="underline font-medium">34843</span>
          </p>

          <Backbutton />
        </div>
      ) : null} */}
    </div>
  );
}
