/* import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleForm = async (e) => {
    e.preventDefault();
    if (
      password.length > 10 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setError(
        "La contraseña debe tener 10 caracteres o menos y contener al menos una letra mayúscula y un número"
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("La contraseña y la confirmación de la contraseña no coinciden");
      return;
    }
    try {
      await registerUserService({ name, email, password });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <div style={{display: "flex", alignItems: "center"}}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div style={{display: "flex", alignItems: "center"}}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div onClick={toggleShowConfirmPassword}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </fieldset>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

export default RegisterPage;
 */
import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleForm = async (e) => {
    e.preventDefault();
    if (
      password.length > 10 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setError(
        "Password must be 10 characters or less and contain at least one capital letter and one number"
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Invalid email or password");
      return;
    }
    try {
      await registerUserService({ name, email, password });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div onClick={toggleShowConfirmPassword}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </fieldset>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
export default RegisterPage;
