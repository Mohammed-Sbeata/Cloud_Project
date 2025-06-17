const express = require("express");
const router = express.Router();
const { classifyDocument } = require("../controllers/classifyController");

router.post("/classify", async (req, res) => {
  const documents = req.body.documents;
  // تصنيف المستندات
  // ...
  res.json({ message: "تم التصنيف بنجاح" });
});

module.exports = router;
