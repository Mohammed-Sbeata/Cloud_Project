const express = require("express");
const router = express.Router();
const { searchDocuments } = require("../controllers/searchController");

router.get("/search", async (req, res) => {
  const keyword = req.query.q;
  const results = await searchDocuments(keyword);
  res.json(results);
});

module.exports = router;
