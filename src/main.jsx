import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ThemeProvider as TemplateProvider } from "styled-components";
import App from "./App.jsx";
import TagManager from "react-gtm-module";

import TemplateStyles from "./assets/styles/TemplateStyles.js";
import GlobalStyles from "./assets/styles/GlobalStyles";
import "venobox/dist/venobox.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/common-style.css";
import "./assets/styles/buttons-style.css";

// Initialize GTM
const tagManagerArgs = {
  gtmId: "GTM-WKP5C7MR", // ⬅️ Replace with your GTM ID
};
// Defer GTM init by 3s to prevent main-thread blocking during initial paint
setTimeout(() => {
  TagManager.initialize(tagManagerArgs);
}, 3000);

// Track route changes
function GTMRouteTracker() {
  const location = useLocation();
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: location.pathname + location.search,
      },
    });
  }, [location]);
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TemplateProvider theme={TemplateStyles}>
      <BrowserRouter>
        <GlobalStyles />
        <GTMRouteTracker />
        <App />
      </BrowserRouter>
    </TemplateProvider>
  </React.StrictMode>
);
