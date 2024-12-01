// src/services/blogService.js
const Blog = require("../models/Blog");

exports.getAllBlogs = async () => {
  try {
    return await Blog.find();
  } catch (error) {
    throw new Error("Error fetching blogs: " + error.message);
  }
};

exports.getBlogBySlug = async (slug) => {
  try {
    return await Blog.findOne({ slug });
  } catch (error) {
    throw new Error("Error fetching blog by slug: " + error.message);
  }
};

exports.createBlog = async (title, content, author) => {
  try {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    const newBlog = new Blog({ title, slug, content, author });
    return await newBlog.save();
  } catch (error) {
    throw new Error("Error creating blog: " + error.message);
  }
};

exports.updateBlog = async (slug, title, content) => {
  try {
    return await Blog.findOneAndUpdate({ slug }, { title, content, updatedAt: Date.now() }, { new: true });
  } catch (error) {
    throw new Error("Error updating blog: " + error.message);
  }
};

exports.deleteBlog = async (slug) => {
  try {
    await Blog.findOneAndDelete({ slug });
  } catch (error) {
    throw new Error("Error deleting blog: " + error.message);
  }
};