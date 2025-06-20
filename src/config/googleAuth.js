const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');



// مسار ملف التوكن
const TOKEN_PATH = path.join(__dirname, 'token.json');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;


// بيانات OAuth2
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  'http://localhost:3000/oauth2callback' // URI من Google Console
);

// تحميل التوكن إذا كان موجود
if (fs.existsSync(TOKEN_PATH)) {
  const token = fs.readFileSync(TOKEN_PATH);
  oAuth2Client.setCredentials(JSON.parse(token));
} else {
  console.log("🔑 token isn't prepared yet open /auth");
}

module.exports = oAuth2Client;
