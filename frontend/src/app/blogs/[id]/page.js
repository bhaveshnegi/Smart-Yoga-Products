"use client";

import Layout from "../../components/Layout";
import blogs from "../../../data/blogs";
import "../../../styles/blogs.css";

export default function BlogDetails({ params }) {
  const { id } = params;
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <Layout>
        <div className="blog-not-found">
          <h2>Blog Not Found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="blog-details">
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </Layout>
  );
}
