import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Auth = ({ children }) => {
  const token = cookies.get("TOKEN");

  return token ? children : <Navigate to="/" />;
};

export default Auth;
