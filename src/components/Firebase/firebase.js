import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC1livlOhGs2NUUYMMBl3Zv7AzUV2SwXO0",
    authDomain: "votrcrowd-59be3.firebaseapp.com",
    databaseURL: "https://votrcrowd-59be3.firebaseio.com",
    projectId: "votrcrowd-59be3",
    storageBucket: "votrcrowd-59be3.appspot.com",
    messagingSenderId: "225024509530",
    appId: "1:225024509530:web:5d4cee905fd6bb89c93a63",
    measurementId: "G-X5PCLLGELD"
};

class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      // this.serverValue = app.database.ServerValue;

    }
  }
   
export default Firebase;