/* import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/Header.css";
import logo from "../css/logo.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    // Agrega aquí la redirección después de cerrar sesión, si es necesario
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <h1>
          <Link to={"/"} className="header-title">
            Travel Linkiland
          </Link>
        </h1>
      </div>
      <div className="header-right">
        <nav>
          <Auth />
          {isAuthenticated && (
            <>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
 */
import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import "../css/Header.css";
import logo from "../css/logo.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
    // Agrega aquí la redirección después de cerrar sesión, si es necesario
  };
  return (
    <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <h1>
          <Link to={"/"} className="header-title">
            Travel Linkiland
          </Link>
        </h1>
      </div>
      <div className="header-right">
        <nav>
          <Auth />
          {isAuthenticated && (
            <>
              <button className="logout-button" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
