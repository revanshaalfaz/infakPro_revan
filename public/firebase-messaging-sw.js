// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDjzl2GOkguIxf_sSjSEl6w5yny5K0PWYA",
  authDomain: "lockinfak.firebaseapp.com",
  databaseURL: "https://lockinfak-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lockinfak",
  storageBucket: "lockinfak.appspot.com",
  messagingSenderId: "572045721741",
  appId: "1:572045721741:web:772d7f219cd48989e262c4",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
