import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import LocationContextProvider from "./ContextProviders/LocationContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <LocationContextProvider>
    <App />
  </LocationContextProvider>
  // </React.StrictMode>
);


