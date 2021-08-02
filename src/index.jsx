import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import AuthProvider from "./contexts/AuthContext";
import HabitsProvider from "./contexts/HabitsContext";
import StreakProvider from "./contexts/StreakContext";

import "./services/firebase";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <HabitsProvider>
        <StreakProvider>
          <App />
        </StreakProvider>
      </HabitsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
