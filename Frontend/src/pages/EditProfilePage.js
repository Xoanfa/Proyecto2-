/* import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  updateUserService,
  getUserDataService,
  deleteUserAccountService,
} from "../services";
import { useAuth } from "../context/AuthContext";
export const EditProfilePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { logout } = useAuth();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        const user = await getUserDataService(token);
        setName(user.name || "");
        setEmail(user.email || "");
      }
    };
    fetchUserData();
  }, [token]);
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
    try {
      await updateUserService({ name, email, password, token });
      setSuccess("Changes made successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setError("There was a problem with the profile update");
    }
  };
  const handleDeleteAccount = async () => {
    const enteredPassword = window.prompt(
      "Por favor, ingresa tu contraseña para confirmar la eliminación de la cuenta"
    );
    if (enteredPassword) {
      try {
        await deleteUserAccountService({
          userId: localStorage.getItem("userId"),
          password: enteredPassword,
          token,
        });
        alert("Tu cuenta ha sido eliminada, esperamos que vuelvas pronto!!");
        logout();
        navigate("/");
      } catch (error) {
        setError("Hubo un problema al eliminar la cuenta");
      }
    } else {
      setError("Debes ingresar tu contraseña para eliminar la cuenta");
    }
  };
  return (
    <section>
      <h1>Edit Profile</h1>
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
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button className="button-spacing">Submit</button>
        <button
          type="button"
          className="button-spacing"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
        {error ? <p className="text-error">{error}</p> : null}
        {success ? <p className="text-success">{success}</p> : null}
      </form>
    </section>
  );
}; */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  updateUserService,
  getUserDataService,
  deleteUserAccountService,
} from "../services";
import { useAuth } from "../context/AuthContext";
export const EditProfilePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { logout } = useAuth();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        const user = await getUserDataService(token);
        setName(user.name || "");
        setEmail(user.email || "");
      }
    };
    fetchUserData();
  }, [token]);
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
    try {
      await updateUserService({ name, email, password, token });
      setSuccess("Changes made successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setError("There was a problem with the profile update");
    }
  };
  const handleDeleteAccount = async () => {
    const enteredPassword = window.prompt(
      "Please enter your password to confirm account deletion"
    );
    if (enteredPassword) {
      try {
        await deleteUserAccountService({
          userId: localStorage.getItem("userId"),
          password: enteredPassword,
          token,
        });
        alert("Your account has been deleted, we hope you come back soon!");
        logout();
        navigate("/");
      } catch (error) {
        setError("There was a problem deleting the account");
      }
    } else {
      setError("You must enter your password to delete the account");
    }
  };
  return (
    <section>
      <h1>Edit Profile</h1>
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
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button className="button-spacing">Submit</button>
        <button
          type="button"
          className="button-spacing delete-account-button"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
        {error ? <p className="text-error">{error}</p> : null}
        {success ? <p className="text-success">{success}</p> : null}
      </form>
    </section>
  );
};
