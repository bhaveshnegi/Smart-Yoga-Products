import { useState, useEffect } from "react";
import axios from "axios";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const addBlog = async () => {
    const formData = new FormData();
    formData.append('title', newBlog.title);
    formData.append('content', newBlog.content);

    try {
      const { data } = await axios.post("http://localhost:5000/api/blogs", newBlog);
      setBlogs([...blogs, data]);
      setNewBlog({ title: "", content: "" });
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div>
      <h3>Manage Blogs</h3>
      <div>
        <input
          type="text"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Blog Content"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        />
        <button onClick={addBlog}>Add Blog</button>
      </div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} - {blog.content}
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
