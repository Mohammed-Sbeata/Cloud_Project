const express = require("express");
const router = express.Router();
const { classifyAllDocuments } = require("../controllers/classifyController");

router.get("/classify", async (req, res) => {
  try {
    const data = await classifyAllDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error classifying documents" });
  }
});

module.exports = router;
