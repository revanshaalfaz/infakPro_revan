import express from "express";
import bodyParser from "body-parser";
import admin from "firebase-admin";
import cron from "node-cron";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountPath = path.resolve(__dirname, "./config/serviceAccountKey.json");
console.log("Service Account Path:", serviceAccountPath);

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lockinfak.firebaseio.com",
});

const app = express();
app.use(bodyParser.json());

let prayerTimes = {};
let userTokens = [];

// Melayani file statis dari folder build
app.use(express.static(path.join(__dirname, "build")));

// Rute untuk root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/api/prayer-times", (req, res) => {
  prayerTimes = req.body;
  console.log("Received prayer times:", prayerTimes);
  res.sendStatus(200);
});

app.post("/api/save-token", (req, res) => {
  const { token } = req.body;
  if (token && !userTokens.includes(token)) {
    userTokens.push(token);
    console.log("Token saved:", token);
  }
  res.sendStatus(200);
});

const sendNotification = async (token, title, body) => {
  const message = {
    token: token,
    notification: {
      title: title,
      body: body,
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Successfully sent message:", response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

const scheduleNotifications = () => {
  const times = Object.values(prayerTimes);
  const prayerNames = Object.keys(prayerTimes);

  times.forEach((time, index) => {
    const [hour, minute] = time.split(":").map(Number);
    const notificationTime = new Date();
    notificationTime.setHours(hour);
    notificationTime.setMinutes(minute - 10);

    cron.schedule(`${notificationTime.getMinutes()} ${notificationTime.getHours()} * * *`, () => {
      userTokens.forEach((token) => {
        sendNotification(token, `Waktu Sholat ${prayerNames[index]}`, `10 menit lagi masuk waktu sholat ${prayerNames[index]}.`);
      });
    });
  });
};

// Ini hanya untuk mengupdate waktu sholat dari API Aladhan setiap hari pada pukul 00:00
cron.schedule("0 0 * * *", async () => {
  try {
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=Yogyakarta&country=Indonesia&method=15`);
    prayerTimes = response.data.data.timings;
    console.log("Updated prayer times:", prayerTimes);
    scheduleNotifications();
  } catch (error) {
    console.error("Error fetching prayer times:", error);
  }
});

const PORT = process.env.PORT || 3000; // Ganti dengan port yang diinginkan
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
