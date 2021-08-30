import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDDRHrLBU0fuTh5gHwizlLg_bAMfAjB_jU",
    authDomain: "clocker-work-net.firebaseapp.com",
    projectId: "clocker-work-net",
    storageBucket: "clocker-work-net.appspot.com",
    messagingSenderId: "1001653170243",
    appId: "1:1001653170243:web:8f1c604f98055ce5d8e4f6",
    measurementId: "G-PB6GSLYC4H"
  }
  


export const firebase = initializeApp(firebaseConfig)