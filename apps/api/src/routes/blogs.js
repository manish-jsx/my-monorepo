// src/routes/blogs.js
const express = require("express");
const { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require("../controllers/blogController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:slug", getBlog);
router.post("/", authenticate, createBlog);
router.put("/:slug", authenticate, updateBlog);
router.delete("/:slug", authenticate, deleteBlog);

module.exports = router;