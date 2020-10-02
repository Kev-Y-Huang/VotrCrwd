import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CivicInfo />
      </header>
      
      {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
      <script src="/__/firebase/7.22.0/firebase-app.js"></script>
      {/* <!-- TODO: Add SDKs for Firebase products that you want to use
          https://firebase.google.com/docs/web/setup#available-libraries --> */}
      <script src="/__/firebase/7.22.0/firebase-analytics.js"></script>
      {/* <!-- Initialize Firebase --> */}
      <script src="/__/firebase/init.js"></script>
    </div>

    
  );
}

export default App;
