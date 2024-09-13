import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../components/UserContext";

function Login() {
  const { token } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (token) {
    return <Navigate to="/" />; // Redirige al home si el usuario ya está autenticado
  }

  const logInCorrecto = (e) => {
    e.preventDefault();
    if (!email && !password) {
      setError("Ambos campos son obligatorios");
    } else if (!email) {
      setError("El campo de correo es obligatorio");
    } else if (!password) {
      setError("El campo de contraseña es obligatorio");
    } else if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
    } else {
      setError("");
      alert("Inicio de sesión exitoso");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="fondo-registro">
      <h1 className="titulo">Mi Cuenta</h1>
      <div className="formularios">
        <form onSubmit={logInCorrecto} className="inputs-generica">
          {error && <p>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            className="input-style"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input-style"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="boton">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
