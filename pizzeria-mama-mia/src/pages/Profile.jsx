import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const email = "usuario@ejemplo.com";
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate("/login");
  };

  return (
    <div className="fondo-registro">
      <h1 className="titulo">Mi Perfil</h1>
      <div className="formularios">
        <div className="profile-container">
          <p className="profile-email">{email}</p>
          <button className="btn btn-dark" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
