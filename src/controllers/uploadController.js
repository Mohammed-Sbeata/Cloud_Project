// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const { uploadToDrive } = require("./driveUploader");




// // إعداد multer لتخزين الملفات محلياً مؤقتاً
// const upload = multer({ dest: "uploads/" });

// async function uploadDocument(req, res) {
//   try {
//     if (!req.file) return res.status(400).send("No file uploaded");

//     const filePath = req.file.path;
//     const fileName = req.file.originalname;

//     const driveFileId = await uploadToDrive(filePath, fileName);
    
//     console.log("Drive File ID:", driveFileId);
    

//     // حذف الملف المؤقت بعد الرفع
//     // fs.unlinkSync(filePath);

//     console.log("File info:", req.file);

//     res.send(`✅ File uploaded to Google Drive! ID: ${driveFileId}`);
//   } catch (error) {
//     console.error("Upload error:", error);
//     res.status(500).send("❌ Upload failed");

//   }
// }

// module.exports = { uploadDocument, upload };


const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { uploadToDrive } = require("./driveUploader");

// إعداد multer لتخزين الملفات محلياً باسمها الأصلي
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    cb(null, originalName); // حفظ الاسم كما هو (مع الامتداد)
  },
});

const upload = multer({ storage: storage });

async function uploadDocument(req, res) {
  try {
    if (!req.file) return res.status(400).send("No file uploaded");

    const filePath = req.file.path;
    const fileName = req.file.originalname;

    const driveFileId = await uploadToDrive(filePath, fileName);
    
    console.log("Drive File ID:", driveFileId);
    console.log("File info:", req.file);

    // إذا بدك تمسح الملف بعد الرفع لفك التعليق عن السطر:
    // fs.unlinkSync(filePath);

    res.send(`✅ File uploaded to Google Drive! ID: ${driveFileId}`);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).send("❌ Upload failed");
  }
}

module.exports = { uploadDocument, upload };
