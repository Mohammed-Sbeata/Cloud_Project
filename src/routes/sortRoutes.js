const express = require("express");
const router = express.Router();
const { sortDocuments } = require("../controllers/sortController");

router.get("/sort", sortDocuments);

module.exports = router;
