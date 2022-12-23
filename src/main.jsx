import React from "react";
import ReactDOM from "react-dom/client";
import { GithubProvider } from "./context/GithubContext";
import GlobalStyleProvider from "./global/globalStyles";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GithubProvider>
      <GlobalStyleProvider />
      <App />
    </GithubProvider>
  </React.StrictMode>
);
