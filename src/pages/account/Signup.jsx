import { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import authStore from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";

export default function SignUp({ SignSwitch }) {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/confirmer");
  };

  const [passwordVisibility, setPasswordVisibility] = useState("invisible");

  return (
    <form
      onSubmit={handleSignup}
      encType="multipart/form-data"
      className="flex flex-col gap-5 w-full text-slate-700 "
    >
      <h2 className="text-3xl text-center dark:text-white mb-8">
        Inscrivez vous
      </h2>
      <TextField
        name="username"
        // error={store.emailError ? true : false}
        onChange={store.updateSignupForm}
        value={store.signupForm.username}
        placeholder="Votre username"
        // color={store.emailError ? "error" : "secondary"}
        color="warning"
        type="text"
        id="outlined-textarea"
        label="Username"
        // label={store.emailError ? "This e-mail is already used ! " : "E-mail"}
        variant="outlined"
        required
      />

      <FormControl variant="outlined" required>
        <InputLabel color="warning" htmlFor="outlined-adornment-password">
          Mot de passe
        </InputLabel>
        <OutlinedInput
          name="password"
          onChange={store.updateSignupForm}
          value={store.signupForm.password}
          id="outlined-adornment-password"
          type={passwordVisibility == "visible" ? "text" : "password"}
          label="Mot de passe"
          placeholder="Votre mot de passe"
          color="warning"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className="dark:text-slate-300 hover:dark:text-white"
                aria-label="toggle password visibility"
                onClick={() => {
                  passwordVisibility == "invisible"
                    ? setPasswordVisibility("visible")
                    : setPasswordVisibility("invisible");
                }}
                edge="end"
              >
                {passwordVisibility === "visible" ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {/* <FormControl variant="outlined" required>
        <InputLabel color="warning" htmlFor="outlined-adornment-password">
          Confirmer
        </InputLabel>
        <OutlinedInput
          name="confimPassword"
          //   value={store.signUpForm.password}
          //   onChange={store.updateSignupForm}
          id="outlined-adornment-password"
          type={confirmPasswordVisibility == "visible" ? "text" : "password"}
          label="Confirmer"
          placeholder="Confirmer votre mot de passe"
          color="warning"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className="dark:text-slate-300 hover:dark:text-white"
                aria-label="toggle password visibility"
                onClick={() => {
                  confirmPasswordVisibility == "invisible"
                    ? setConfirmPasswordVisibility("visible")
                    : setConfirmPasswordVisibility("invisible");
                }}
                edge="end"
              >
                {confirmPasswordVisibility === "visible" ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl> */}
      <div className="flex gap-4">
        <Button
          variant="outlined"
          size="large"
          startIcon={<LoginIcon />}
          className="btn btn-outlined  grow"
          onClick={() => SignSwitch("login")}
        >
          Connecter
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<PersonAddIcon />}
          className="btn btn-contained grow"
          type="submit"
        >
          Inscriver
        </Button>
      </div>
    </form>
  );
}

SignUp.propTypes = {
  SignSwitch: PropTypes.string,
};
