import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize("G-5N7LWRCKWH");

function AnalyticsWrapper() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title,
    });
  }, [location]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Wrap your app in AnalyticsWrapper to track pageviews */}
      <AnalyticsWrapper />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
