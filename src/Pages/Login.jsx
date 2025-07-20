import React, { useState } from "react";
import "../Styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="login__field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login__field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login__button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;