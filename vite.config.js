import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function nvidiaProxyPlugin() {
  return {
    name: "nvidia-proxy-plugin",
    configureServer(server) {
      server.middlewares.use("/api/chat", async (req, res) => {
        if (req.method === "OPTIONS") {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method Not Allowed");
          return;
        }

        let bodyStr = "";
        req.on("data", (chunk) => {
          bodyStr += chunk;
        });

        req.on("end", async () => {
          try {
            const body = JSON.parse(bodyStr || "{}");
            const authHeader = req.headers["authorization"] || "";
            const clientKey = authHeader.replace(/^Bearer\s+/i, "").trim();
            const apiKey =
              clientKey ||
              process.env.VITE_NVIDIA_API_KEY ||
              "";

            const nvidiaRes = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify(body),
            });

            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader(
              "Content-Type",
              nvidiaRes.headers.get("content-type") || "text/event-stream; charset=utf-8"
            );
            res.setHeader("Cache-Control", "no-cache");
            res.setHeader("Connection", "keep-alive");

            if (!nvidiaRes.ok) {
              res.statusCode = nvidiaRes.status;
              const errText = await nvidiaRes.text();
              res.end(errText);
              return;
            }

            res.statusCode = 200;
            if (nvidiaRes.body) {
              const reader = nvidiaRes.body.getReader();
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                res.write(Buffer.from(value));
              }
            }
            res.end();
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    },
  };
}

function paddleApiPlugin() {
  return {
    name: "paddle-api-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url === "/api/paddle-webhook") {
          try {
            const mod = await import("./api/paddle-webhook.js");
            return mod.default(req, res);
          } catch (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
        }
        if (url === "/api/check-entitlement") {
          try {
            const mod = await import("./api/check-entitlement.js");
            return mod.default(req, res);
          } catch (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), nvidiaProxyPlugin(), paddleApiPlugin()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("src/data/questions")) return "data-questions";
          if (id.includes("src/data/generalprobe")) return "data-generalprobe";
          if (id.includes("src/data/fz")) return "data-fz";
          if (id.includes("node_modules/katex")) return "vendor-katex";
          if (id.includes("node_modules/recharts")) return "vendor-recharts";
          if (id.includes("node_modules/@supabase")) return "vendor-supabase";
          if (id.includes("node_modules/framer-motion")) return "vendor-framer";
          if (id.includes("node_modules/@dnd-kit")) return "vendor-dnd";
          if (id.includes("node_modules/lucide-react")) return "vendor-icons";
        },
      },
    },
  },
});
