// // خوارزمية التصنيف وتطبيقها على المستندات
// function classifyDocument(document, classificationTree) {
//   // تصنيف المستند حسب الشجرة المحددة
// }

// module.exports = { classifyDocument };


// const categories = {
//   "Computer Science": ["algorithm", "computer", "programming", "AI", "machine learning"],
//   "Medicine": ["hospital", "patient", "surgery", "medical", "doctor"],
//   "Law": ["law", "court", "judge", "legal", "case"],
//   "Business": ["marketing", "business", "finance", "strategy", "accounting"],
//   "Education": ["student", "teacher", "school", "education", "learning"]
// };


// function classifyDocument(text) {
//   const lowerText = text.toLowerCase();

//   for (const [category, keywords] of Object.entries(categories)) {
//     for (const word of keywords) {
//       if (lowerText.includes(word)) {
//         return category;
//       }
//     }
//   }

//   return "Uncategorized";
// }



const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

const uploadsDir = path.join(__dirname, "../../uploads"); // تأكد إن المسار صحيح حسب مكان مجلد uploads

// 🧠 شجرة التصنيف
const categories = {
  "Computer Science": ["algorithm", "computer", "programming", "ai", "machine learning"],
  "Medicine": ["hospital", "patient", "surgery", "medical", "doctor"],
  "Law": ["law", "court", "judge", "legal", "case"],
  "Business": ["marketing", "business", "finance", "strategy", "accounting"],
  "Education": ["student", "teacher", "school", "education", "learning"]
};

// 🔍 دالة التصنيف
function classifyDocument(text) {
  const lowerText = text.toLowerCase();

  for (const [category, keywords] of Object.entries(categories)) {
    for (const word of keywords) {
      if (lowerText.includes(word)) {
        return category;
      }
    }
  }

  return "Uncategorized";
}

// 📄 استخراج النص من PDF أو DOCX
async function extractText(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dataBuffer = fs.readFileSync(filePath);

  if (ext === ".pdf") {
    const data = await pdfParse(dataBuffer);
    return data.text;
  } else if (ext === ".docx") {
    const result = await mammoth.extractRawText({ buffer: dataBuffer });
    return result.value;
  }

  return "";
}

// 🧪 تصنيف جميع الملفات
async function classifyAllDocuments() {
  const files = fs.readdirSync(uploadsDir);
  const result = [];

  for (const file of files) {
    const filePath = path.join(uploadsDir, file);
    try {
      const text = await extractText(filePath);
      const category = classifyDocument(text);
      result.push({ file, category });
    } catch (err) {
      console.error(`❌ Error classifying file ${file}:`, err);
    }
  }

  return result;
}

module.exports = { classifyAllDocuments };
