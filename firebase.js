
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2tOYx5mkgni6pV-ko4q6qqDb_xBDwuY4",
    authDomain: "mayfield-hotel-renewal.firebaseapp.com",
    projectId: "mayfield-hotel-renewal",
    storageBucket: "mayfield-hotel-renewal.appspot.com",
    messagingSenderId: "551213807910",
    appId: "1:551213807910:web:867b04c49719e7da7629e7",
    measurementId: "G-ZSNZH8D1EL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
