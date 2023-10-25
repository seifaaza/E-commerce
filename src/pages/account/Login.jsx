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

export default function Login({ SignSwitch }) {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate("/confirmer");
  };

  const [passwordVisibility, setPasswordVisibility] = useState("invisible");

  return (
    <form
      onSubmit={handleLogin}
      encType="multipart/form-data"
      className="flex flex-col gap-5 w-full text-slate-700 "
    >
      <h2 className="text-3xl text-center dark:text-white mb-8">
        Connectez vous
      </h2>

      <TextField
        name="username"
        onChange={store.updateLoginForm}
        value={store.loginForm.username}
        placeholder="Votre username"
        color="warning"
        type="text"
        id="outlined-textarea"
        label="Username"
        variant="outlined"
        required
      />
      <FormControl variant="outlined" required>
        <InputLabel color="warning" htmlFor="outlined-adornment-password">
          Mot de passe
        </InputLabel>
        <OutlinedInput
          name="password"
          onChange={store.updateLoginForm}
          value={store.loginForm.password}
          id="outlined-adornment-password"
          type={passwordVisibility == "visible" ? "test" : "password"}
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
      <div className="flex gap-4">
        <Button
          variant="outlined"
          size="large"
          startIcon={<PersonAddIcon />}
          className="btn btn-outlined grow"
          onClick={() => SignSwitch("signUp")}
        >
          Inscriver
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<LoginIcon />}
          className="btn btn-contained grow"
        >
          Connecter
        </Button>
      </div>
      {/* <span
      className={`text-red-600 ${store.loginError ? "block" : "hidden"} `}
      >
        Email or password incorrect !
      </span> */}
    </form>
  );
}

Login.propTypes = {
  SignSwitch: PropTypes.string,
};
