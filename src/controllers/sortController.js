const fs = require("fs");
const path = require("path");
const { extractTitle } = require("../utils/documentReader");

async function sortDocuments(req, res) {
  const uploadsDir = path.join(__dirname, "../../uploads");
  const files = fs.readdirSync(uploadsDir);

  const filesWithTitles = [];

  for (const file of files) {
    const filePath = path.join(uploadsDir, file);
    const title = await extractTitle(filePath);
    filesWithTitles.push({ file, title });
  }

  const sorted = filesWithTitles.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  res.json(sorted);
}

module.exports = { sortDocuments };
