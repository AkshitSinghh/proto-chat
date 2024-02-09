import { requestUrl } from "./constants";
import { toast } from "react-toastify";
import Axios from "axios";

export const authLogin = (email, password) => {
  Axios.post(`${requestUrl}/api/login`, {
    email: email,
    password: password,
  }).then((response) => {
    toast.error(response.data.message);
  });
};

export const authRegister = (username, password, email) => {
  Axios.post(`${requestUrl}/api/register`, {
    username: username,
    password: password,
    email: email,
  }).then((response) => {
    toast(response.data.message);
  });
};
