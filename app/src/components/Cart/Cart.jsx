import { useCart } from "../../context/CartContext.jsx";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalAmount, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return <div className="cart-empty">Your cart is empty 🛒</div>;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>€{item.price} per ticket</p>
            </div>
            <div className="item-actions">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h2>Total: €{totalAmount}</h2>
        <button onClick={clearCart}>Clear All</button>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
