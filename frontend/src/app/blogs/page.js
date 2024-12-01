"use client";

import Layout from "../components/Layout";
import blogs from "../../data/blogs";
import "../../styles/blogs.css";
import Link from "next/link";

export default function BlogList() {
  return (
    <Layout>
      <div className="blogs-container">
        <h2>Blog</h2>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-preview">
            <h3>{blog.title}</h3>
            <p>{blog.preview}</p>
            <Link href={`/blogs/${blog.id}`}>
              <button className="read-more-button">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
