"use client";

import Link from 'next/link';
import { useCart } from './CartContext';
import '../../styles/layout.css';

export default function Layout({ children }) {
  const { cart } = useCart();

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
            <li>
              <Link href="/cart">
                Cart <span>({cart.length})</span>
              </Link>
            </li>
            <li>
            <Link href="/blogs">Blog</Link>
            </li>
            <li>
            <Link href="/social-media">Social Media</Link>
            </li>
            <li>
            <Link href="/admin">Admin</Link>
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
