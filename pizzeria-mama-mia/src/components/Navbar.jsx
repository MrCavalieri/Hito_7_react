import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { token, logout } = useUser();
  const { total } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="barraNavegacion">
      <div className="textoNavBar">
        <p>Pizzeria Mamma Mia!</p>
      </div>
      <ul className="contentNavBar">
        <li className="navItem">
          <Link to="/" className="boton">
            🏠 Home
          </Link>
        </li>
        {token ? (
          <>
            <li className="navItem">
              <Link to="/profile" className="boton">
                👤 Profile
              </Link>
            </li>
            <li className="navItem">
              <button className="boton" onClick={handleLogout}>
                🔒 Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="navItem">
              <Link to="/login" className="boton">
                🔑 Login
              </Link>
            </li>
            <li className="navItem">
              <Link to="/register" className="boton">
                📝 Register
              </Link>
            </li>
          </>
        )}
      </ul>
      <button className="botonCarro" onClick={() => navigate("/cart")}>
        🛒 Total: ${total.toLocaleString()}
      </button>
    </nav>
  );
};

export default Navbar;
