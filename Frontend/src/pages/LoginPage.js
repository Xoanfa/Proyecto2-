import React, { useState } from "react";
import { logInUserService } from "../services";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const { login, setUserid } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await logInUserService({ email, password });
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.user.id);
        setUserid(response.user.id);
        login();
        navigate("/links");
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass">Password</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="pass"
              id="pass"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </fieldset>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
};
export default LoginPage;
