import { useState } from "react";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "The Benefits of Yoga", content: "Yoga improves mental and physical health." },
    { id: 2, title: "Yoga for Beginners", content: "Start your yoga journey with simple poses." },
  ]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });

  const addBlog = () => {
    const newId = blogs.length + 1;
    setBlogs([...blogs, { ...newBlog, id: newId }]);
    setNewBlog({ title: "", content: "" });
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
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
