const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

// استخراج العنوان من ملف PDF
async function extractTitleFromPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  const lines = data.text.split("\n").filter(Boolean);
  return lines[0].trim(); // نفترض أول سطر هو العنوان
}

// استخراج العنوان من ملف Word
async function extractTitleFromDocx(filePath) {
  const data = await mammoth.extractRawText({ path: filePath });
  const lines = data.value.split("\n").filter(Boolean);
  return lines[0].trim(); // نفترض أول سطر هو العنوان
}

// دالة عامة حسب نوع الامتداد
async function extractTitle(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".pdf") return await extractTitleFromPDF(filePath);
  if (ext === ".docx") return await extractTitleFromDocx(filePath);
  return "No Title";
}

module.exports = {
  extractTitle,
};
