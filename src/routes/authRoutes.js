const express = require("express");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const oAuth2Client = require("../config/googleAuth");

// أول خطوة: يفتح رابط الصلاحيات
router.get("/auth", (req, res) => {
  const scopes = ["https://www.googleapis.com/auth/drive.file"];
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  res.redirect(authUrl);
});

// الخطوة الثانية: Google ترجع لنا كود نصير فيه موثقين
router.get("/oauth2callback", async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  // نحفظ التوكن
  fs.writeFileSync(
    path.join(__dirname, "../config/token.json"),
    JSON.stringify(tokens)
  );

  res.send("✅ Auth is right you can upload now !.");
});

module.exports = router;
