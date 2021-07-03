import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import AuthProvider from "./contexts/AuthContext";
import HabitsProvider from "./contexts/HabitsContext";

import "./services/firebase";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
