"use client";

import Layout from "../components/Layout";
import { useCart } from "../components/CartContext";
import { useState } from "react";
import "../../styles/payment.css";

export default function Payment() {
  const { cart } = useCart();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <Layout>
        <div className="payment-success">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      </Layout>
    );
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <Layout>
      <div className="payment-container">
        <h2>Payment</h2>
        <p>Total Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <button className="pay-now-button" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </Layout>
  );
}
