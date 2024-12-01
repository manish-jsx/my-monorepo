const express = require("express");
const authRoutes = require("./auth");
const dataRoutes = require("./data");

const router = express.Router();

router.use("/auth", authRoutes); // Auth-related routes
router.use("/data", dataRoutes); // Data-related routes

module.exports = router;