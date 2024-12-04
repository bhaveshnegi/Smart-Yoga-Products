"use client";

import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

export default function BlogDetails({ params }) {
  const { id } = params; // Extract ID from params
  const [blog, setBlog] = useState(null); // State for storing blog details
  const [loading, setLoading] = useState(true); // Loading state for fetching
  const [error, setError] = useState(null); // Error state in case of failure

  useEffect(() => {
    // Fetch the blog details from your backend
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!res.ok) {
          const errorData = await res.json(); // Parse backend error response
          throw new Error(errorData.message || "Failed to fetch blog");
        }
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error.message); // Debugging
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchBlog();
  }, [id]); // Re-fetch if the ID changes

  if (loading) {
    return (
      <Layout>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2>Loading...</h2>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2>{error}</h2>
        </div>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2>Blog not found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="blog-details-container" style={{ padding: "2rem" }}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            style={{ maxWidth: "100%", margin: "1rem 0" }}
          />
        )}
        <p>
          <strong>Published on:</strong> {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Layout>
  );
}
