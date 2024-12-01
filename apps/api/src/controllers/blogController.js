// src/controllers/blogController.js
const blogService = require("../services/blogService");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBlog = async (req, res) => {
  const { slug } = req.params;
  try {
    const blog = await blogService.getBlogBySlug(slug);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBlog = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newBlog = await blogService.createBlog(title, content, author);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  const { slug } = req.params;
  const { title, content } = req.body;
  try {
    const updatedBlog = await blogService.updateBlog(slug, title, content);
    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  const { slug } = req.params;
  try {
    await blogService.deleteBlog(slug);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};