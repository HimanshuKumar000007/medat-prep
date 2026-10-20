import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "katex/dist/katex.min.css";
import App from "./App.tsx";
import { preInitPaddle } from "./lib/paddle";

// Initialize Paddle.js immediately at app startup so it is ready on every
// page — including /checkout?_ptxn=... links used by Paddle's Default Payment Link.
preInitPaddle();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
