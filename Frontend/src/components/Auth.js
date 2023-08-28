import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserPlus, FaUser, FaLink } from "react-icons/fa";
import "../css/Header.css";
export const Auth = () => {
  const { isAuthenticated } = useAuth();
  return (
    <ul className="nav-list">
      {!isAuthenticated && (
        <>
          <li className="nav-item">
            <Link to={"/register"}>
              <FaUserPlus /> Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"}>
              <FaUser /> Login
            </Link>
          </li>
        </>
      )}
      {isAuthenticated && (
        <>
          <li className="nav-item">
            <Link to={"/links"}>
              <FaLink /> Links
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/edit-profile"}>
              <FaUser /> Edit Profile
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};
