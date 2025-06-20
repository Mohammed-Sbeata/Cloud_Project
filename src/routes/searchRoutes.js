const express = require('express');
const router = express.Router();
const { searchFiles } = require('../controllers/searchController');

// GET /search?keyword=test
router.get('/search', async (req, res) => {
  const { keyword } = req.query;
  if (!keyword) return res.status(400).json({ error: 'No keyword provided' });

  try {
    const results = await searchFiles(keyword);
    res.json(results);
  } catch (err) {
    console.error('Search error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
