import create from "zustand";
import axios from "axios";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";

const authStore = create((set) => ({
  loggedIn: null,
  user: null,

  cookies: new Cookies(),

  loginError: false,

  loginForm: {
    username: "",
    password: "",
  },

  signupForm: {
    username: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  updateSignupForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  signup: async () => {
    try {
      const { signupForm, cookies } = authStore.getState();
      const res = await axios.post(
        "https://srv2.aptusmaroc.com/mobile-customer/register",
        signupForm
      );
      set({
        loggedIn: true,
        signupForm: {
          username: "",
          password: "",
        },
      });
      cookies.set("authorization", res.data.username, {
        expires: new Date(1690868775 * 1000),
      });
    } catch (err) {
      set({
        loginError: true,
        loggedIn: false,
      });
      // if (
      //   err.response &&
      //   err.response.status >= 400 &&
      //   err.response.status < 500
      // )
      //   set({
      //     emailError: true,
      //   });
      // else {
      //   set({
      //     emailError: false,
      //   });
      // }
    }
  },

  login: async () => {
    try {
      const {
        loginForm: { username, password },
        cookies,
      } = authStore.getState();
      const formdata = new FormData();
      formdata.append("username", username);
      formdata.append("password", password);
      const res = await axios.post(
        "https://srv2.aptusmaroc.com/mobile-customer/login",
        formdata
      );
      const decoded = jwt(res.data.access_token);
      console.log(decoded);
      set({
        user: decoded,
        loggedIn: true,
        loginForm: {
          username: "",
          password: "",
        },
      });
      cookies.set("jwt-authorization", res.data.access_token, {
        expires: new Date(decoded.exp * 1000),
      });
      // console.log(res.data.access_token);
      // console.log(decoded);
    } catch (err) {
      set({
        loginError: true,
        loggedIn: false,
      });
      // const { cookies, loggedIn } = authStore.getState();
      //   console.log(loggedIn);
      // console.log(cookies);
    }
  },

  logout: () => {
    const { cookies } = authStore.getState();
    set({
      user: null,
    });
    cookies.remove("jwt-authorization");
  },

  //   checkAuth: async () => {
  //     try {
  //       const res = await axios.get("/admin-check-auth", {
  //         withCredentials: true,
  //       });
  //       set({
  //         loggedIn: true,
  //         // admin: res.data.admin,
  //       });
  //     } catch (err) {
  //       set({ loggedIn: false });
  //     }
  //   },

  //   logout: async () => {
  //     await axios.get("/admin-logout", { withCredentials: true });
  //     set({ loggedIn: false });
  //     window.location.replace("/dashboard/");
  //   },
}));

export default authStore;
