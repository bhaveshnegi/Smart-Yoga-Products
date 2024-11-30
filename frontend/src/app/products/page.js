import Layout from '../components/Layout';
import '../../styles/products.css'; // Optional: Add custom styles
import products from '../../data/products'; // Import mock data
import Link from 'next/link'; // Import Link for navigation

export default function Products() {
  return (
    <Layout>
      <div className="products-container">
        <h2>Our Yoga Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <Link href={`/products/${product.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
