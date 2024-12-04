import Layout from "../components/Layout";
import blogs from "../../data/blogs";
import "../../styles/blogs.css";
import Link from "next/link";

export default async function BlogList() {
  let blogs = [];
  try {
    const res = await fetch("https://smart-yoga-products-backend.onrender.com/api/blogs");
    if (!res.ok) throw new Error("Failed to fetch blogs");
    blogs = await res.json();
  } catch (error) {
    console.error(error);
  }
  return (
    <Layout>
      <div className="blogs-container">
        <h2>Blog</h2>
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-preview">
            <h3>{blog.title}</h3>
            <p>{blog.preview}</p>
            <Link href={`/blogs/${blog._id}`}>
              <button className="read-more-button">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
