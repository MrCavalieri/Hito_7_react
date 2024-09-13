import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../components/UserContext";

function Register() {
  const { token } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  if (token) {
    return <Navigate to="/" />; // Redirige al home si el usuario ya está autenticado
  }

  const registroExitoso = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Debe completar formulario");
    } else if (password.length < 6) {
      setError("La contraseña debe tener mínimo 6 caracteres");
    } else if (password !== confirmPassword) {
      setError("Las contraseñas deben ser idénticas");
    } else {
      setError("");
      alert("Registro Exitoso");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="fondo-registro">
      <h1 className="titulo">¡Regístrate!</h1>
      <div className="formularios">
        <form onSubmit={registroExitoso}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="inputs-generica">
            <input
              className="input-style"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-style"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="input-style"
              type="password"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="boton">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
