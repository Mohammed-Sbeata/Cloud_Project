// // دوال البحث ضمن المستندات
// async function searchDocuments(keyword) {
//   // تنفيذ البحث ضمن نصوص المستندات
//   // إرجاع قائمة بالمستندات التي تطابق البحث
// }

// module.exports = { searchDocuments };


// searchController.js

// مثلا هذي دالة بحث
// function searchFiles(keyword) {
//   // هنا تحط الكود اللي يعمل البحث في الملفات
//   // وترجع النتائج كمصفوفة مثلا
//   // ...
//   return results; 
// }

// // تصدير الدالة عشان تقدر تستدعيها من ملفات ثانية
// module.exports = { searchFiles };


// const documents = require('./data'); // استيراد بيانات الملفات

// // دالة البحث عن ملفات تطابق النص في العنوان أو المحتوى
// function searchFiles(keyword) {
//   if (!keyword) return [];

//   const lowerKeyword = keyword.toLowerCase();

//   // ترجع الملفات اللي عنوانها أو محتواها يحتوي الكلمة المفتاحية
//   const results = documents.filter(doc => 
//     doc.title.toLowerCase().includes(lowerKeyword) || 
//     doc.content.toLowerCase().includes(lowerKeyword)
//   );

//   return results;
// }

// module.exports = { searchFiles };



const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

const documentsDir = path.join(__dirname, '../../uploads');

// دالة لقراءة ملف PDF
async function extractPdfText(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

// دالة لقراءة ملف DOCX
async function extractDocxText(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const result = await mammoth.extractRawText({ buffer: dataBuffer });
  return result.value;
}

// دالة استخراج نص من ملف
async function extractText(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.pdf') return await extractPdfText(filePath);
  else if (ext === '.docx') return await extractDocxText(filePath);
  else return '';
}

// ✅ دالة البحث
async function searchFiles(keyword) {
  const files = fs.readdirSync(documentsDir);
  const results = [];

  for (const file of files) {
    const fullPath = path.join(documentsDir, file);
    try {
      const text = await extractText(fullPath);
      if (text.toLowerCase().includes(keyword.toLowerCase())) {
        results.push({ file, preview: text.slice(0, 200) });
      }
    } catch (err) {
      console.error(`Error reading file ${file}:`, err.message);
    }
  }

  return results;
}

// ✅ تصدير الدالة
module.exports = { searchFiles };
