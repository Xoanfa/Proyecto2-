import React, { createContext, useState, useContext, useEffect } from "react";
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userid, setUserid] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userIdstorage = localStorage.getItem("userId");
    if (token) {
      setIsAuthenticated(true);
      setUserid(userIdstorage)
    }
  }, []);
  const login = () => setIsAuthenticated(true);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
  };
  const value = {setUserid,
    isAuthenticated,
    login,
    logout,
    userid,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};