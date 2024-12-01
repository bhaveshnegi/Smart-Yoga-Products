"use client";

import Link from "next/link";
import Layout from "../components/Layout";
import { useCart } from "../components/CartContext";
import "../../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <Layout>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <p className="total-price">Total Price: ${totalPrice}</p>
            <Link href="/payment">
              <button className="proceed-button">Proceed to Payment</button>
            </Link>
          </>
        )}
      </div>
    </Layout>
  );
}
