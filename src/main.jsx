import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./context/Firebase.jsx";
import { Toaster } from "react-hot-toast";
// import { FirebaseProvider } from "./context/Firebase.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseProvider>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
  </FirebaseProvider>
);
