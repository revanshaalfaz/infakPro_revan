import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolusi path ke service account JSON
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountPath = path.resolve(__dirname, "../config/serviceAccountKey.json");
console.log("Service Account Path:", serviceAccountPath);

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

// Inisialisasi admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

// Fungsi untuk mengirim notifikasi
async function sendNotification(token, title, body) {
  const message = {
    token: token,
    notification: {
      title: title,
      body: body,
    },
  };

  try {
    const response = await messaging.send(message);
    console.log("Successfully sent message:", response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

const token = "ej2BWOiqIZuIFwrdpDfcjB:APA91bHoQcLuwa03I1XBygU2n9VxiZJhSpKUGrKToey1dvNbFmBEVfX4D25AyZ1gYtAhR-oJ3MpsswOwUT8qPYtSZbnP3knhrqcXtFNwvmY34UeDm33omzqaRlO_FggJW3bBke3gx5CX";
const title = "Test Notification";
const body = "This is a test notification";

sendNotification(token, title, body).catch(console.error);
