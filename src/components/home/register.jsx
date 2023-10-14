import { useState } from "react";
import { authRegister } from "../../utils/auth-utils";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authRegister(username, password, email);
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

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
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

export default Register;
