const express = require("express");
const router = express.Router();
const { uploadDocument, upload } = require("../controllers/uploadController");

router.post("/upload", upload.single("file"), uploadDocument);

module.exports = router;
