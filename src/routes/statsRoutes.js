const express = require("express");
const router = express.Router();
const { getStats } = require("../controllers/statsController");

router.get("/stats", async (req, res) => {
  try {
    const stats = await getStats();
    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الإحصائيات" });
  }
});

module.exports = router;
