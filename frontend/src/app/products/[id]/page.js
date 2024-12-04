"use client";

import Layout from '../../components/Layout';
import { useCart } from '../../components/CartContext';
import { useEffect, useState } from 'react';

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch the product details from your backend
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`); // Backend endpoint
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data); // Set the product data to the state
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]); // Re-fetch if the ID changes

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
      <div className="product-details-container" style={{ padding: '2rem' }}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image-details"
        />
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
