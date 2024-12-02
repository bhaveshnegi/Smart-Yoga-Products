import '../styles/home.css';
import Layout from './components/Layout';
import "../styles/products.css"; 
import products from "../data/products";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="home-container">
        <div className="hero-banner">
          <h1>Embrace Wellness with Smart Yoga Products</h1>
          <p>Discover a better way to enhance your yoga journey with our smart tools.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>Why Choose Us?</h2>
          <div className="benefits">
            <div className="benefit">
              <img src="/images/flexibility.png" alt="Flexibility" />
              <p>Improves Flexibility</p>
            </div>
            <div className="benefit">
              <img src="/images/eco-friendly.png" alt="Eco-Friendly" />
              <p>Eco-Friendly Materials</p>
            </div>
            <div className="benefit">
              <img src="/images/smart-tech.png" alt="Smart Tech" />
              <p>Advanced Smart Features</p>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="featured-products">
          <h2>Our Top Picks</h2>
          <div className="product-list">
          <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <Link href={`/products/${product.id}`}>
                <button className="view-details-button">View Details</button>
              </Link>
            </div>
          ))}
        </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-media-section">
          <h2>Follow Us</h2>
          <div className="social-feed">
            {/* Embed Instagram or any other feed */}
            <p>Instagram feed goes here...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
