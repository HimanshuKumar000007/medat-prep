import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "katex/dist/katex.min.css";
import App from "./App.tsx";
import { preInitPaddle } from "./lib/paddle";
import { initMixpanel } from "./lib/mixpanel";

// Initialize Paddle.js immediately at app startup so it is ready on every
// page — including /checkout?_ptxn=... links used by Paddle's Default Payment Link.
preInitPaddle();

// Initialize Mixpanel analytics eagerly with EU privacy defaults
initMixpanel();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
