import Link from 'next/link';
import '../../styles/layout.css'; // Import styles

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>Yoga Products Store</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; 2024 Yoga Products Store</p>
      </footer>
    </div>
  );
}
