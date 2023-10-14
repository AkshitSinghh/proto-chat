import { requestUrl } from "./constants";
import { Axios } from "axios";

export const authLogin = (email, password) => {
  Axios.post(`${requestUrl}/api/login`, {
    email: email,
    password: password,
  });
};

export const authRegister = (username, password, email) => {
  Axios.post(`${requestUrl}/api/register`, {
    username: username,
    password: password,
    email: email,
  });
};
