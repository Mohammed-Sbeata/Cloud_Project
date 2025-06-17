// التعامل مع Firebase Firestore: حفظ، قراءة المستندات
const { db } = require("../config/firebase");

async function saveDocumentMetadata(metadata) {
  // حفظ بيانات المستند في Firestore
}

async function getAllDocuments() {
  const snapshot = await db.collection("documents").get();
  return snapshot.docs.map(doc => doc.data());
}

module.exports = { saveDocumentMetadata, getAllDocuments };
