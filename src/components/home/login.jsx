import { useState } from "react";
import { authLogin } from "../../utils/auth-utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authLogin(email, password);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
