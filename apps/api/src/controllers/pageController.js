// src/controllers/pageController.js
const pageService = require("../services/pageService");

exports.getAllPages = async (req, res) => {
  try {
    const pages = await pageService.getAllPages();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPage = async (req, res) => {
  const { slug } = req.params;
  try {
    const page = await pageService.getPageBySlug(slug);
    if (!page) return res.status(404).json({ error: "Page not found" });
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePage = async (req, res) => {
  const { slug } = req.params;
  const { content } = req.body;
  try {
    const updatedPage = await pageService.updatePageContent(slug, content);
    if (!updatedPage) return res.status(404).json({ error: "Page not found" });
    res.json(updatedPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};