"use client";

import Layout from '../components/Layout';
import { useCart } from '../components/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button
                  style={{
                    padding: '0.5rem',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
