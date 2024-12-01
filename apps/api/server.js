// src/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const pageRoutes = require("./routes/pages");
const blogRoutes = require("./routes/blogs");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/blogs", blogRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});