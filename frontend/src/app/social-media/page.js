"use client";

import Layout from "../components/Layout";
import "../../styles/social-media.css";

export default function SocialMedia() {
  return (
    <Layout>
      <div className="social-media-container">
        <h2>Follow Us on Instagram</h2>
        <div className="instagram-feed">
          {/* Embed Instagram Post */}
          <iframe
            src="https://www.instagram.com/p/CX2KHLQr0qL/embed"
            frameBorder="0"
            allowFullScreen
            className="instagram-post"
            title="Instagram Post 1"
          ></iframe>
          <iframe
            src="https://www.instagram.com/p/CYzZxJrF_yJ/embed"
            frameBorder="0"
            allowFullScreen
            className="instagram-post"
            title="Instagram Post 2"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
