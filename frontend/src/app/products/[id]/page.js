"use client";

import Layout from '../../components/Layout';
import products from '../../../data/products';
import { useCart } from '../../components/CartContext';

export default function ProductDetails({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2>Product not found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <button
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </Layout>
  );
}
