import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { LinkPage } from "./pages/LinkPage";
import { HomePage } from "./pages/HomePage";
import { EditProfilePage } from "./pages/EditProfilePage";

function App() {
  return (
    <AuthProvider>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/links" element={<LinkPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
        </Routes>
        <Footer />
      </main>
    </AuthProvider>
  );
}
export default App;
