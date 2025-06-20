
require('dotenv').config();




const sortRoutes = require("./routes/sortRoutes");
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(express.static("public"));
app.use(authRoutes);
app.use(sortRoutes);

// استيراد المسارات
const uploadRoutes = require("./routes/uploadRoutes");
const searchRoutes = require("./routes/searchRoutes");
const classifyRoutes = require("./routes/classifyRoutes");
const statsRoutes = require("./routes/statsRoutes");

// استخدام المسارات
app.use(uploadRoutes);
app.use(searchRoutes);
app.use(classifyRoutes);
app.use(statsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
