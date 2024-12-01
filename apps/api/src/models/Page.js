// src/models/Page.js
const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // e.g., 'homepage', 'about'
  content: { type: String, required: true }, // WYSIWYG HTML content
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Page", pageSchema);