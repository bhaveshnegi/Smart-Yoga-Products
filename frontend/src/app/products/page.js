import Layout from "../components/Layout";
import "../../styles/products.css"; // Optional: Add custom styles
import Link from "next/link"; // Import Link for navigation

export default async function Products() {
  let products = [];
  try {
    const res = await fetch("https://smart-yoga-products-backend.onrender.com/api/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    products = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <Layout>
      <div className="products-container">
        <h2>Our Yoga Products</h2>
        <div className="product-list">
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <Link href={`/products/${product._id}`}>
                  <button className="view-details-button">View Details</button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}
