// مثال تحكم برفع الملفات (موجود في مشروعك الأساسي)
const multer = require("multer");
// إعداد multer
const upload = multer({ dest: "uploads/" });

async function uploadDocument(req, res) {
  // عملية رفع الملف وتخزينه في السحابة أو قاعدة البيانات
}

module.exports = { uploadDocument, upload };
