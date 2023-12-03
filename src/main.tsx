import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Auth0Provider
        domain={domain as string}
        clientId={clientId as string}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
      </Auth0Provider> */}
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
