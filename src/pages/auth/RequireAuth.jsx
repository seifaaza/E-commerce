import { useEffect } from "react";
import Connexion from "../account/Connexion";
import Error from "../../error/Error";
import Confirmer from "../confirmer/Confimer";
import authStore from "../../store/AuthStore";

export default function RequireAuth() {
  const store = authStore();

  //   useEffect(() => {
  //     if (store.loggedIn === null) {
  //       store.checkAuth();
  //     }
  //   }, []);

  if (store.loggedIn === true) {
    return <Confirmer />;
  }

  if (store.loggedIn === null) {
    return <Error />;
  }

  if (store.loggedIn === false) {
    return <Connexion />;
  }

  return <div>children</div>;
}
