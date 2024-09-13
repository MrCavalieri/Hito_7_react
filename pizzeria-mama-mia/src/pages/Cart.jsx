import React from "react";
import { useCart } from "../components/CartContext";
import { useUser } from "../components/UserContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useCart();
  const { token } = useUser();

  return (
    <div className="productos">
      s<h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.img} alt={item.nombre} className="cart-item-img" />
              <div className="cart-item-details">
                <h5>{item.nombre}</h5>
                <p>Descripción: {item.desc}</p>
                <p>Precio: ${item.price.toLocaleString()}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button
                  className="btn btn-light"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-dark" disabled={!token}>
        Pagar
      </button>
      {!token && <p>Inicia sesión para poder realizar el pago.</p>}
    </div>
  );
};

export default Cart;
