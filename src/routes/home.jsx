import Login from "../components/home/login.jsx";
import Register from "../components/home/register.jsx";
import Design from "../components/home/design.jsx";
import HomeBar from "../components/home/homeBar.jsx";
import { useState } from "react";
import "../styles/routes/home.css";
import "../styles/index.css";

const Home = () => {
  const [loginRegisterToggle, setLoginRegisterToggle] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Design>{loginRegisterToggle ? <Login /> : <Register />}</Design>
      <HomeBar setLoginRegisterToggle={setLoginRegisterToggle} />
    </div>
  );
};

export default Home;
