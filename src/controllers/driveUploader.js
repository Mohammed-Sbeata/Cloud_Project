require("dotenv").config();

const fs = require("fs");
const { google } = require("googleapis");
const path = require("path");
// قراءة النص الخام من المتغير
const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

if (!raw) {
  throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_KEY from .env");
}

// تحويل النص إلى JSON
const serviceAccount = JSON.parse(raw);

console.log('Service account in drive uploader !! ', serviceAccount);

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

async function uploadToDrive(localFilePath, fileName) {
  const driveService = google.drive({ version: "v3", auth });


  const fileMetadata = {
    name: fileName,
  };

  const media = {
    mimeType: "application/pdf", // غيّر حسب نوع الملف
    body: fs.createReadStream(localFilePath),
  };

  try {
    // 1. رفع الملف
    const file = await driveService.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    const fileId = file.data.id;

    // 2. تغيير الصلاحيات ليصير متاح للكل للعرض
    await driveService.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // 3. إنشاء رابط مباشر للمشاهدة
    const result = await driveService.files.get({
      fileId: fileId,
      fields: "webViewLink, webContentLink",
    });

    return result.data.webViewLink; // هذا رابط العرض المباشر
  } catch (error) {
    console.error("Google Drive Upload Error:", error);
    throw error;
  }
}

module.exports = { uploadToDrive };
