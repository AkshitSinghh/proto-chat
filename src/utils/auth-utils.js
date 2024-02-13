import { requestUrl } from "./constants";
import { toast } from "react-toastify";
import Axios from "axios";
import { redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const authLogin = (email, password) => {
  if (email && password) {
    Axios.post(`${requestUrl}/api/login`, {
      email: email,
      password: password,
    }).then((response) => {
      if (response.status === 202) {
        toast.success(response.data.message);
        // cookies.set("Token", response.data.token, { path: "/" });
        redirect("/chat");
      } else {
        toast.error(response.data.message);
      }
    });
  } else {
    toast.warning("Please enter all fields");
  }
};

export const authRegister = (username, password, email) => {
  if (username && password && email) {
    Axios.post(`${requestUrl}/api/register`, {
      username: username,
      password: password,
      email: email,
    }).then((response) => {
      if (response.status === 201) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    });
  } else {
    toast.warning("Please enter all fields");
  }
};
