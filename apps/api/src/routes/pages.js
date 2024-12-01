// src/routes/pages.js
const express = require("express");
const { getAllPages, getPage, updatePage } = require("../controllers/pageController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllPages);
router.get("/:slug", getPage);
router.put("/:slug", authenticate, updatePage);

module.exports = router;