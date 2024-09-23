import { useState } from "react";
import { motion } from "framer-motion";

const initialBlogData = [
  {
    id: 1,
    title: "Understanding React Hooks",
    date: "07/01/2024",
    description:
      "React Hooks are functions that let you use state and other React features without writing a class. In this article, we will explore the basics of Hooks and how to use them effectively in modern React applications.",
  },
  {
    id: 2,
    title: "Introduction to Tailwind CSS",
    date: "07/02/2024",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs without having to write traditional CSS. This blog covers how to get started with Tailwind and create beautiful interfaces.",
  },
  {
    id: 3,
    title: "Building Scalable Applications with MERN Stack",
    date: "07/03/2024",
    description:
      "Learn how to build full-stack applications using MongoDB, Express, React, and Node.js. This guide covers key architectural patterns for creating scalable and maintainable applications.",
  },
];

const Blog = () => {
  const [blogs, setBlogs] = useState(initialBlogData);
  const [newBlog, setNewBlog] = useState({ title: "", date: "", description: "" });
  const [isEditing, setIsEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleCreate = () => {
    const newId = blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    setBlogs([...blogs, { ...newBlog, id: newId }]);
    setNewBlog({ title: "", date: "", description: "" });
    setShowForm(false); // Hide form after creating
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    setNewBlog(blogToEdit);
    setIsEditing(id);
    setShowForm(true); // Show form for editing
  };

  const handleUpdate = () => {
    setBlogs(blogs.map((blog) => (blog.id === isEditing ? newBlog : blog)));
    setNewBlog({ title: "", date: "", description: "" });
    setIsEditing(null);
    setShowForm(false); // Hide form after update
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Latest Blog Posts</h2>

      {/* Add Blog Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mb-4"
      >
        {showForm ? "Close Blog Form" : "Add New Blog"}
      </button>

      {/* Blog Form (Create or Edit) */}
      {showForm && (
        <div className="mb-6">
          <input
            type="text"
            placeholder="Blog Title"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 mb-2 w-full"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Blog Date"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 mb-2 w-full"
            value={newBlog.date}
            onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
          />
          <textarea
            placeholder="Blog Description"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 mb-4 w-full"
            value={newBlog.description}
            onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
          />
          {isEditing ? (
            <button
              onClick={handleUpdate}
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              Update Blog
            </button>
          ) : (
            <button
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              Create Blog
            </button>
          )}
        </div>
      )}

      {/* Blog List in Scrollable Table */}
      <div className="max-h-96 overflow-y-auto">
        <table className="min-w-full text-left">
          <thead className="sticky top-0 bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-gray-100">Title</th>
              <th className="px-4 py-2 text-gray-100">Date</th>
              <th className="px-4 py-2 text-gray-100">Description</th>
              <th className="px-4 py-2 text-gray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="bg-gray-600">
                <td className="px-4 py-2 text-gray-200">{blog.title}</td>
                <td className="px-4 py-2 text-gray-200">{blog.date}</td>
                <td className="px-4 py-2 text-gray-200">{blog.description}</td>
                <td className="px-4 py-2 text-gray-200">
                  <button
                    onClick={() => handleEdit(blog.id)}
                    className="text-indigo-400 hover:text-indigo-300 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Blog;

