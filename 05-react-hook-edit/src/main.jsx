import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppStateProvider } from "./contexts/appState.jsx";
import { appReducers, initialState } from "./reducers/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);
