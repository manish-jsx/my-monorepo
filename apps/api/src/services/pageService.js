// src/services/pageService.js
const Page = require("../models/Page");

exports.getAllPages = async () => {
  try {
    return await Page.find();
  } catch (error) {
    throw new Error("Error fetching pages: " + error.message);
  }
};

exports.getPageBySlug = async (slug) => {
  try {
    return await Page.findOne({ slug });
  } catch (error) {
    throw new Error("Error fetching page by slug: " + error.message);
  }
};

exports.updatePageContent = async (slug, content) => {
  try {
    return await Page.findOneAndUpdate({ slug }, { content, updatedAt: Date.now() }, { new: true });
  } catch (error) {
    throw new Error("Error updating page: " + error.message);
  }
};